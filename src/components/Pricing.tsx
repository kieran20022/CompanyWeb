import { Check, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const plans = [
  {
    name: "Starter",
    from: "300",
    description: "Perfect for new businesses that need a clean online presence.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 round of revisions",
      "2 weeks delivery",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    from: "800",
    description:
      "For growing businesses that need more functionality and polish.",
    features: [
      "Up to 15 pages",
      "Custom design & branding",
      "Blog or news section",
      "CRM & email integration",
      "Advanced SEO",
      "Google Analytics setup",
      "3 rounds of revisions",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Commerce",
    from: "1,500",
    description: "For businesses ready to sell online with a full storefront.",
    features: [
      "Full e-commerce store",
      "Product management dashboard",
      "Payment gateway integration",
      "CRM, inventory & booking tools",
      "Customer accounts",
      "Advanced SEO & analytics",
      "Unlimited revisions",
      "Ongoing support",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 dark:bg-gray-950 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Pricing
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Transparent pricing, no surprises
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Every project is unique. These starting prices give you an idea of
              what to expect — get in touch for a personalized quote.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1} className="flex">
              <div
                className={`relative flex flex-1 flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.highlighted
                    ? "border-blue-600 shadow-lg ring-1 ring-blue-600 dark:border-blue-500 dark:ring-blue-500"
                    : "border-gray-200 hover:border-blue-200 hover:shadow-blue-600/5 dark:border-gray-800 dark:hover:border-blue-900"
                } dark:bg-gray-900`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                  <p className="mt-6">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      from{" "}
                    </span>
                    <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      ${plan.from}
                    </span>
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`group mt-8 flex items-center justify-center gap-2 rounded-lg py-3 text-center text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  Contact for Your Price
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
