import SectionLabel from "@/components/common/SectionLabel";
import Reveal from "@/components/common/Reveal";

type Plan = {
  posture: string;
  name: string;
  price: string;
  rate: string;
  /** Middle on desktop, first on mobile — and the only card carrying accent. */
  recommended?: boolean;
  order: { mobile: string; desktop: string };
};

const PLANS: Plan[] = [
  {
    posture: "A real go",
    name: "A MONTH",
    price: "$9.99",
    rate: "billed monthly",
    order: { mobile: "order-2", desktop: "lg:order-1" },
  },
  {
    posture: "I’m doing this",
    name: "A YEAR",
    price: "$39.99",
    // "67% less", never "save 67%". A saving is a pitch; a rate is a fact.
    rate: "67% less over twelve months",
    recommended: true,
    order: { mobile: "order-1", desktop: "lg:order-2" },
  },
  {
    posture: "It’s just mine now",
    name: "NO END DATE",
    price: "$99.99",
    rate: "paid once, never renews",
    order: { mobile: "order-3", desktop: "lg:order-3" },
  },
];

export default function PricingSection() {
  return (
    <section className="section-spacing">
      <div className="max-w-270 mx-auto px-6">
        <Reveal className="text-center max-w-[62ch] mx-auto mb-14">
          <SectionLabel>PRICING</SectionLabel>
          <h2 className="text-display">
            Writing is free. The page is what you&apos;re paying for.
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10 items-stretch">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`${plan.order.mobile} ${plan.order.desktop} flex flex-col justify-between gap-10 rounded-(--r-inner) border p-8 ${
                  plan.recommended
                    ? "border-[#7ac4d1] bg-[#7ac4d1]/6"
                    : "border-[#242830] bg-[#12141a]"
                }`}
              >
                <div>
                  <p className="text-question mb-4">{plan.posture}</p>
                  <p
                    className={`text-label ${
                      plan.recommended ? "text-[#7ac4d1]" : "text-(--ink-3)"
                    }`}
                  >
                    {plan.name}
                  </p>
                </div>
                <div>
                  <p className="text-display numeric mb-2">{plan.price}</p>
                  <p
                    className={`text-meta ${
                      plan.recommended ? "text-(--ink-2)" : ""
                    }`}
                  >
                    {plan.rate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="text-meta text-center max-w-[62ch] mx-auto">
            The monthly and yearly plans renew until you stop them. We tell you
            three days before, and name the amount. Cancelling takes two taps in
            Settings.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
