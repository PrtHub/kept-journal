"use client";

import { useEffect, useRef, useState } from "react";

const VS_SOURCE = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FS_SOURCE = `
precision highp float;

uniform vec2  u_resolution;
uniform float u_time;
uniform float u_hue;      // 189.0
uniform float u_density;  // 3.4
uniform float u_speed;    // 0.55
uniform float u_grain;    // 1.0

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    sum += amp * valueNoise(p);
    p = p * 2.02;
    amp = amp * 0.5;
  }
  return sum;
}

vec3 hsl2rgb(vec3 c) {
  vec3 k = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return c.z + c.y * (k - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);

  float t = u_time * u_speed;
  float n = fbm(p * u_density + vec2(t * 0.06, t * -0.04));

  // Domain warp — this is what makes it read as cloud rather than as noise.
  n = fbm(p * u_density + vec2(n, n * 0.5) + vec2(t * 0.03, 0.0));

  vec3 ground = vec3(0.039, 0.043, 0.051);          // #0A0B0D
  vec3 tint   = hsl2rgb(vec3(u_hue / 360.0, 0.46, 0.52));

  float amount   = smoothstep(0.30, 0.90, n) * 0.30;
  float vignette = 1.0 - 0.35 * length(uv - 0.5);
  vec3 col = ground + tint * amount * vignette;

  col += (hash21(gl_FragCoord.xy + t * 60.0) - 0.5) * 0.022 * u_grain;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

const CSS_FIELD = `
  radial-gradient(60% 50% at 38% 28%, #15303a 0%, transparent 70%),
  radial-gradient(50% 40% at 72% 68%, #122a33 0%, transparent 75%),
  radial-gradient(80% 70% at 50% 50%, #0d1519 0%, var(--ground) 100%)
`;

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let teardown: (() => void) | null = null;

    /**
     * Builds the pipeline and starts rendering. Re-runnable: Strict Mode
     * remounts this effect in development, and the GPU can hand the context
     * back after a loss. Every failure path leaves `live` false so the CSS
     * field below stays visible.
     */
    const start = () => {
      if (disposed) return;

      let gl: WebGLRenderingContext | null = null;
      try {
        gl = canvas.getContext("webgl", {
          // Transparent, not opaque. The shader writes alpha 1.0 so the result
          // is identical when it works — but if it ever stops working, an
          // opaque canvas would composite as a black rectangle over the CSS
          // field instead of simply revealing it.
          alpha: true,
          antialias: false,
          depth: false,
          stencil: false,
          powerPreference: "low-power",
        }) as WebGLRenderingContext | null;
      } catch {
        setLive(false);
        return;
      }
      if (!gl || gl.isContextLost()) {
        setLive(false);
        return;
      }
      const ctx = gl;

      const fallback = () => setLive(false);

      const compile = (type: number, source: string) => {
        const shader = ctx.createShader(type);
        if (!shader) return null;
        ctx.shaderSource(shader, source);
        ctx.compileShader(shader);
        if (!ctx.getShaderParameter(shader, ctx.COMPILE_STATUS)) {
          ctx.deleteShader(shader);
          return null;
        }
        return shader;
      };

      const vs = compile(ctx.VERTEX_SHADER, VS_SOURCE);
      const fs = compile(ctx.FRAGMENT_SHADER, FS_SOURCE);
      const program = vs && fs ? ctx.createProgram() : null;
      if (!vs || !fs || !program) return fallback();

      ctx.attachShader(program, vs);
      ctx.attachShader(program, fs);
      ctx.linkProgram(program);
      if (!ctx.getProgramParameter(program, ctx.LINK_STATUS)) return fallback();
      ctx.useProgram(program);

      const buffer = ctx.createBuffer();
      ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer);
      ctx.bufferData(
        ctx.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        ctx.STATIC_DRAW
      );
      const positionLocation = ctx.getAttribLocation(program, "a_position");
      ctx.enableVertexAttribArray(positionLocation);
      ctx.vertexAttribPointer(positionLocation, 2, ctx.FLOAT, false, 0, 0);

      const resLoc = ctx.getUniformLocation(program, "u_resolution");
      const timeLoc = ctx.getUniformLocation(program, "u_time");
      ctx.uniform1f(ctx.getUniformLocation(program, "u_hue"), 189.0);
      ctx.uniform1f(ctx.getUniformLocation(program, "u_density"), 3.4);
      ctx.uniform1f(ctx.getUniformLocation(program, "u_speed"), 0.55);
      ctx.uniform1f(ctx.getUniformLocation(program, "u_grain"), 1.0);

      const draw = (seconds: number) => {
        ctx.uniform1f(timeLoc, seconds);
        ctx.drawArrays(ctx.TRIANGLES, 0, 6);
      };

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      let frame = 0;
      let visible = !document.hidden;
      const origin = performance.now();
      let lastDraw = 0;
      // Ambience, not animation. 30fps is indistinguishable here and cheaper.
      const interval = 1000 / 30;

      /**
       * Resizing the canvas and uploading u_resolution are deliberately not
       * conditional on each other. The uniform belongs to the program, so a
       * freshly built program needs it even when the canvas is untouched —
       * skipping it leaves u_resolution at (0,0) and the shader divides by
       * zero into NaN, which clamps to black over the whole viewport.
       */
      const syncResolution = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const width = Math.floor(window.innerWidth * dpr);
        const height = Math.floor(window.innerHeight * dpr);
        const resized = canvas.width !== width || canvas.height !== height;
        if (resized) {
          canvas.width = width;
          canvas.height = height;
        }
        ctx.viewport(0, 0, width, height);
        ctx.uniform2f(resLoc, width, height);
        return resized;
      };

      const resize = () => {
        // A resized buffer is cleared, so a still field has to be repainted.
        if (syncResolution() && reduced.matches) draw(0);
      };

      const loop = (now: number) => {
        frame = requestAnimationFrame(loop);
        if (!visible) return;
        const elapsed = now - lastDraw;
        if (elapsed < interval) return;
        lastDraw = now - (elapsed % interval);
        draw((now - origin) / 1000);
      };

      const applyMotionPreference = () => {
        cancelAnimationFrame(frame);
        if (reduced.matches) {
          draw(0); // one frame, then stop
        } else {
          lastDraw = 0;
          frame = requestAnimationFrame(loop);
        }
      };

      const onVisibility = () => {
        visible = !document.hidden;
      };

      syncResolution();
      // Paint before revealing the canvas, so it never fades in blank.
      draw(0);
      applyMotionPreference();

      window.addEventListener("resize", resize);
      document.addEventListener("visibilitychange", onVisibility);
      reduced.addEventListener("change", applyMotionPreference);

      setLive(true);

      teardown = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", resize);
        document.removeEventListener("visibilitychange", onVisibility);
        reduced.removeEventListener("change", applyMotionPreference);
        // Only our own objects. Never loseContext() — the context has to
        // survive for a remount or a restore to rebuild on top of it.
        ctx.deleteProgram(program);
        ctx.deleteShader(vs);
        ctx.deleteShader(fs);
        ctx.deleteBuffer(buffer);
      };
    };

    // A lost context paints nothing, so hand back to the CSS field until the
    // browser offers it again.
    const onContextLost = (event: Event) => {
      event.preventDefault();
      teardown?.();
      teardown = null;
      setLive(false);
    };
    const onContextRestored = () => start();

    canvas.addEventListener("webglcontextlost", onContextLost);
    canvas.addEventListener("webglcontextrestored", onContextRestored);
    start();

    return () => {
      disposed = true;
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      teardown?.();
      teardown = null;
      setLive(false);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none bg-[#0a0b0d]">
      {/* Always painted. The canvas covers it when WebGL is available, so a
          blocked context — or no JS at all — still gets a field, never flat
          black. */}
      <div className="absolute inset-0" style={{ background: CSS_FIELD, filter: "blur(40px)" }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: GRAIN }} />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full transition-opacity duration-700"
        style={{ opacity: live ? 1 : 0 }}
      />
    </div>
  );
}
