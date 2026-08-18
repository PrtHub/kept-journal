import SectionLabel from "@/components/common/SectionLabel";
import Reveal from "@/components/common/Reveal";
import { FAQS } from "@/lib/faqs";

export default function FaqSection() {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="prose-container mx-auto">
          <SectionLabel>FAQ</SectionLabel>

          <h2 className="text-display mb-10">Common questions</h2>

          {/* Native <details>, so it opens with no JS and is keyboard
              operable for free. */}
          <div className="border-t border-[#242830]">
            {FAQS.map((item, idx) => (
              <details key={item.q} className="faq-item" open={idx === 0}>
                <summary className="py-2 rounded">
                  <span className="text-question pr-4">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="faq-indicator text-[22px] font-mono leading-none shrink-0"
                  >
                    +
                  </span>
                </summary>
                <div className="pt-3 pb-2 text-prose">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
