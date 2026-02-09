import { MessageSquare, Paintbrush, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import AnimatedGrid from "./AnimatedGrid";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const icons: LucideIcon[] = [MessageSquare, Paintbrush, Rocket];
const numbers = ["01", "02", "03"];

export default function HowItWorks() {
  const { lang, t } = useLanguage();
  const steps = translations[lang].howItWorks.steps;

  return (
    <section
      id="how-it-works"
      className="relative bg-[var(--color-midnight)] py-24 md:py-32"
    >
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
            {t("howItWorks.label")}
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t("howItWorks.heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
            {t("howItWorks.description")}
          </p>
        </motion.div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={numbers[i]}
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
                  {i < steps.length - 1 && (
                    <div className="pointer-events-none absolute right-0 top-10 hidden h-px w-8 translate-x-full bg-gradient-to-r from-[var(--color-amber)]/30 to-transparent md:block" />
                  )}

                  <div className="h-full relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all duration-500 hover:border-[var(--color-amber)]/15">
                    <span className="pointer-events-none absolute -right-4 -top-6 font-display text-[120px] font-800 leading-none text-white/[0.02] transition-colors duration-500 group-hover:text-[var(--color-amber)]/[0.05]">
                      {numbers[i]}
                    </span>

                    <div className="relative z-10">
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-amber)]">
                        {t("howItWorks.stepLabel")} {numbers[i]}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
