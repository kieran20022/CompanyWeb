import { Check } from "lucide-react";
import FadeIn from "./FadeIn";

const plans = [
  {
    name: "Starter",
    price: "$1,499",
    description: "Perfect for new businesses that need a clean online presence.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 round of revisions",
      "2 weeks delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$2,999",
    description:
      "For growing businesses that need more functionality and polish.",
    features: [
      "Up to 15 pages",
      "Custom design & branding",
      "Blog or news section",
      "Advanced SEO",
      "Google Analytics setup",
      "3 rounds of revisions",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Commerce",
    price: "$4,999",
    description: "For businesses ready to sell online with a full storefront.",
    features: [
      "Full e-commerce store",
      "Product management dashboard",
      "Payment gateway integration",
      "Inventory tracking",
      "Customer accounts",
      "Advanced SEO & analytics",
      "Unlimited revisions",
      "Ongoing support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Pricing
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transparent pricing, no surprises
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              One-time payment. No hidden fees. Optional monthly plans for
              hosting & maintenance available after launch.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-shadow hover:shadow-lg ${
                  plan.highlighted
                    ? "border-blue-600 shadow-lg ring-1 ring-blue-600"
                    : "border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {plan.description}
                  </p>
                  <p className="mt-6">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">one-time</span>
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-blue-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
