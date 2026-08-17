import LogoMark from "@/components/common/LogoMark";
import PrimaryButton from "@/components/common/PrimaryButton";
import Reveal from "@/components/common/Reveal";

export default function CloseSection() {
  return (
    <section className="section-spacing text-center">
      <Reveal className="max-w-270 mx-auto px-6 flex flex-col items-center justify-center">
        <div className="mb-6">
          <LogoMark size={56} />
        </div>

        <h2 className="text-display max-w-[24ch] mx-auto mb-8">
          It&apos;s a journal. It&apos;s on your phone. It writes you a page.
        </h2>

        <div className="flex flex-col items-center gap-3">
          <PrimaryButton />
          <p className="text-meta">Free to write, always.</p>
        </div>
      </Reveal>
    </section>
  );
}
