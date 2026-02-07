import { MessageSquare, Paintbrush, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import AnimatedGrid from "./AnimatedGrid";

const steps: {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}[] = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell us about your business",
    description:
      "We start with a free consultation to understand your goals, your audience, and what makes your business stand out.",
  },
  {
    icon: Paintbrush,
    number: "02",
    title: "We design & build your site",
    description:
      "Our team creates a custom design, writes your copy, and builds a blazing-fast website with all your integrations.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & grow together",
    description:
      "We launch your site and provide ongoing support, SEO optimization, and performance monitoring to keep you growing.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-[var(--color-midnight)] py-24 md:py-32"
    >
      {/* Animated grid background */}
      <AnimatedGrid />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
            The Process
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Three steps to your new website
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
            No confusing process, no jargon. Just a clear path from idea to a
            website you're proud of.
          </p>
        </motion.div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.25, 0.1, 0, 1],
                }}
                className="h-full group relative"
              >
                {/* Connection line */}
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute right-0 top-10 hidden h-px w-8 translate-x-full bg-gradient-to-r from-[var(--color-amber)]/30 to-transparent md:block" />
                )}

                <div className="h-full relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all duration-500 hover:border-[var(--color-amber)]/15">
                  {/* Large number background */}
                  <span className="pointer-events-none absolute -right-4 -top-6 font-display text-[120px] font-800 leading-none text-white/[0.02] transition-colors duration-500 group-hover:text-[var(--color-amber)]/[0.05]">
                    {step.number}
                  </span>

                  <div className="relative z-10">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
                      <step.icon size={22} strokeWidth={1.5} />
                    </div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-amber)]">
                      Step {step.number}
                    </p>
                    <h3 className="font-display text-xl font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
