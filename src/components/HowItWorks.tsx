import { MessageSquare, Paintbrush, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; number: string; title: string; description: string }[] = [
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
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
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative flex gap-6"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.2, ease: "easeOut" }}
            >
              {/* Vertical line + circle */}
              <div className="flex flex-col items-center">
                <div className="z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                  <step.icon size={20} />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-blue-600/40 to-blue-600/0 dark:from-blue-400/40 dark:to-blue-400/0" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-14 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Step {step.number}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
