import SectionLabel from "@/components/common/SectionLabel";
import Reveal from "@/components/common/Reveal";

const PRIVACY_FACTS = [
  {
    label: "Storage",
    detail: "Encrypted database on the device, key in the iOS Keychain",
  },
  {
    label: "Account",
    detail: "None. There is nothing to sign into",
  },
  {
    label: "Face ID",
    detail: "Optional lock, checked against your hardware before it’s switched on",
  },
  {
    label: "Export",
    detail: "Markdown, any time, yours to take",
  },
  {
    label: "Backup",
    detail: "One encrypted file, locked with a passphrase we never see",
  },
  {
    label: "If you stop paying",
    detail: "Everything you wrote stays, and stays readable",
  },
];

export default function PrivacySection() {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          {/* The heaviest block on the page: one plane card, hairline border,
              no shadow. Padding steps down so 320px isn't all gutter. */}
          <div className="rounded-(--r-inner) border border-[#242830] bg-[#12141a] p-5 sm:p-8 lg:p-12 mb-8">
            <SectionLabel>PRIVACY</SectionLabel>

            <h2 className="text-display mb-6">
              Your journal is on your phone. Encrypted.
            </h2>

            <div className="prose-container text-prose mb-10">
              <p>
                No account. No sign-up. No sync. No ads. Setup is measured;
                nothing you do in the app is. There is no server with your
                journal on it, because there is no server.
              </p>
            </div>

            <h3 className="text-question mb-4">What leaves the phone, and when</h3>

            <div className="prose-container space-y-4 text-prose mb-10">
              <p>
                When you ask for a summary, that period&apos;s entries are sent
                to be written up, and then forgotten — nothing is stored, and
                nothing is used to train anything. That is the only thing that
                ever goes out, and only when you tap.
              </p>
              <p>Turn the summary off and nothing leaves at all.</p>
            </div>

            <dl className="w-full border-t border-[#242830]">
              {PRIVACY_FACTS.map((row) => (
                <div
                  key={row.label}
                  className="py-4 border-b border-[#242830] grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 sm:items-baseline"
                >
                  <dt className="sm:col-span-4 font-medium text-[16px] text-(--ink) sm:pr-6">
                    {row.label}
                  </dt>
                  <dd className="sm:col-span-8 m-0 text-[15px] sm:text-[16px] text-(--ink-2)">
                    {row.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <p className="text-lead text-(--ink)">
            Writing, reading, searching and exporting are free forever. The
            money buys the page Kept writes you — never access to your own life.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
