import { MessageSquare, Paintbrush, Rocket } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell us about your business",
    description:
      "We start with a free consultation to understand your goals, your customers, and what makes your business unique.",
  },
  {
    icon: Paintbrush,
    number: "02",
    title: "We design & build your site",
    description:
      "Our team creates a custom design, writes your copy, and builds a fast, modern website — with CRM and tool integrations baked in.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & grow",
    description:
      "Once you approve, we launch your site and provide ongoing support, updates, and SEO to keep things running smoothly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 dark:bg-gray-900 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Three simple steps to your new website
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              No confusing process, no jargon. Just a straightforward path from
              idea to a website you're proud of.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15}>
              <div className="group relative text-center md:text-left">
                <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-white p-4 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md dark:bg-gray-800">
                  <step.icon size={28} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Step {step.number}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
