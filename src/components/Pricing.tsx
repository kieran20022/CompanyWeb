import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

const includes = [
  "Custom design tailored to your brand",
  "Mobile-responsive on all devices",
  "SEO optimization built in",
  "CRM & third-party integrations",
  "Analytics & performance tracking",
  "Ongoing support after launch",
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
              Custom pricing for every business
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              No cookie-cutter packages. Every business is different, so we
              build a proposal around your specific needs and budget. Websites
              start from <span className="font-semibold text-gray-900 dark:text-white">$300</span> — get
              in touch and we'll put together a personalized quote.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-10">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              What's always included
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Regardless of scope, every project comes with:
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                >
                  <Check
                    size={18}
                    className="mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-3 border-t border-gray-100 pt-8 dark:border-gray-800 sm:flex-row sm:justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Starting from
                </p>
                <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  $300
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
              >
                Get Your Custom Quote
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
