import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import AnimatedGrid from "../components/AnimatedGrid";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function PricingPage() {
  const { lang, t } = useLanguage();
  const tiers = translations[lang].pricingPage.tiers;
  const faqs = translations[lang].pricingPage.faqs;

  return (
    <div className="min-h-screen bg-[var(--color-midnight)]">
      <section className="noise-bg relative border-b border-[var(--color-border)] bg-[var(--color-surface)] pt-32 pb-20 md:pt-40 md:pb-28">
        <AnimatedGrid />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
              {t("pricingPage.label")}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t("pricingPage.heading")}
              <span className="text-gradient">
                {t("pricingPage.headingHighlight")}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              {t("pricingPage.description")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const highlight = i === 1;
              return (
                <FadeIn key={tier.name} delay={i * 0.1}>
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 ${
                      highlight
                        ? "border-[var(--color-amber)]/30 bg-[var(--color-surface-elevated)] shadow-[0_0_60px_rgba(245,158,11,0.06)]"
                        : "border-[var(--color-border)] bg-[var(--color-surface)]"
                    }`}
                  >
                    {highlight && (
                      <div className="absolute right-4 top-4 rounded-full bg-[var(--color-amber)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-midnight)]">
                        {t("pricingPage.mostPopular")}
                      </div>
                    )}

                    <div>
                      <h3 className="font-display text-lg font-bold">
                        {tier.name}
                      </h3>
                      <div className="mt-4">
                        <span className="font-display text-5xl font-bold text-[var(--color-amber)]">
                          {tier.price}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                        {tier.description}
                      </p>
                    </div>

                    <ul className="mt-8 flex-1 space-y-3">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                        >
                          <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-amber)]/10">
                            <Check
                              size={12}
                              className="text-[var(--color-amber)]"
                              strokeWidth={3}
                            />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`group mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                        highlight
                          ? "bg-[var(--color-amber)] text-[var(--color-midnight)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]"
                          : "border border-[var(--color-border-hover)] text-[var(--color-text-primary)] hover:border-[var(--color-amber)]/30 hover:bg-[var(--color-amber-glow)]"
                      }`}
                    >
                      {t("pricingPage.getStarted")}
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn>
            <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
              {t("pricingPage.allPricesNote")}
              <Link
                to="/contact"
                className="text-[var(--color-amber)] underline decoration-[var(--color-amber)]/30 underline-offset-2 hover:decoration-[var(--color-amber)]"
              >
                {t("pricingPage.getCustomQuote")}
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                {t("pricingPage.faqLabel")}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t("pricingPage.faqHeading")}
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="rounded-xl h-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-[var(--color-amber)]"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="font-display text-sm font-bold text-[var(--color-text-primary)]">
                        {faq.q}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
