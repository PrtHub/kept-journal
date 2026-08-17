"use client";

import { useEffect, useRef } from "react";

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

export default function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fallbackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const fallback = fallbackRef.current;
    if (!canvas) return;

    const showFallback = () => {
      if (canvas) canvas.style.display = "none";
      if (fallback) fallback.style.display = "block";
    };

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext("webgl", { powerPreference: "low-power" });
    } catch {
      showFallback();
      return;
    }

    if (!gl) {
      showFallback();
      return;
    }

    const createShader = (type: number, source: string) => {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, VS_SOURCE);
    const fs = createShader(gl.FRAGMENT_SHADER, FS_SOURCE);
    if (!vs || !fs) {
      showFallback();
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      showFallback();
      return;
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      showFallback();
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const hueLoc = gl.getUniformLocation(program, "u_hue");
    const densityLoc = gl.getUniformLocation(program, "u_density");
    const speedLoc = gl.getUniformLocation(program, "u_speed");
    const grainLoc = gl.getUniformLocation(program, "u_grain");

    gl.uniform1f(hueLoc, 189.0);
    gl.uniform1f(densityLoc, 3.4);
    gl.uniform1f(speedLoc, 0.55);
    gl.uniform1f(grainLoc, 1.0);

    const resize = () => {
      if (!canvas || !gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let animationFrameId: number;
    let isVisible = !document.hidden;
    let isIntersecting = true;
    const startTime = performance.now();
    let lastDrawTime = 0;
    const targetFpsInterval = 1000 / 30; // 30 FPS target

    const render = (now: number) => {
      if (prefersReducedMotion.matches) {
        if (gl) {
          gl.uniform1f(timeLoc, 0.0);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
        }
        return;
      }

      if (!isVisible || !isIntersecting) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const elapsed = now - lastDrawTime;
      if (elapsed >= targetFpsInterval) {
        lastDrawTime = now - (elapsed % targetFpsInterval);
        const timeSec = (now - startTime) / 1000;
        if (gl) {
          gl.uniform1f(timeLoc, timeSec);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    if (prefersReducedMotion.matches) {
      if (gl) {
        gl.uniform1f(timeLoc, 0.0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isIntersecting = entry.isIntersecting;
      });
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: "var(--ground)",
        }}
      />
      <div
        ref={fallbackRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 bg-[#0a0b0d] overflow-hidden"
        style={{ display: "none" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(60% 50% at 38% 28%, #15303a 0%, transparent 70%),
              radial-gradient(50% 40% at 72% 68%, #122a33 0%, transparent 75%),
              radial-gradient(80% 70% at 50% 50%, #0d1519 0%, var(--ground) 100%)
            `,
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </>
  );
}
