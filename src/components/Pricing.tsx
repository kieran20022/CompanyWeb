import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function Pricing() {
  const { lang, t } = useLanguage();
  const includes = translations[lang].pricing.includes;

  return (
    <section
      id="pricing"
      className="noise-bg relative bg-[var(--color-surface)] py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
              {t("pricing.label")}
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t("pricing.heading")}
              <span className="text-gradient">
                {t("pricing.headingHighlight")}
              </span>
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              {t("pricing.description1")}
              <span className="font-semibold text-[var(--color-text-primary)]">
                {t("pricing.price")}
              </span>
              {t("pricing.description2")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-[var(--color-amber)]/15 bg-[var(--color-surface-elevated)]">
            <div className="border-b border-[var(--color-border)] bg-[var(--color-amber-glow)] px-8 py-6 md:px-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold">
                    {t("pricing.whatsIncluded")}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {t("pricing.everyProject")}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                    {t("pricing.startingFrom")}
                  </p>
                  <p className="font-display text-4xl font-bold text-[var(--color-amber)]">
                    {t("pricing.price")}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-8 py-8 md:px-10">
              <ul className="grid gap-4 sm:grid-cols-2">
                {includes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                  >
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-amber)]/10">
                      <Check
                        size={12}
                        className="text-[var(--color-amber)]"
                        strokeWidth={3}
                      />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-center gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:justify-between">
                <p className="text-sm text-[var(--color-text-muted)]">
                  {t("pricing.needSpecific")}
                  <Link
                    to="/pricing"
                    className="text-[var(--color-amber)] underline decoration-[var(--color-amber)]/30 underline-offset-2 hover:decoration-[var(--color-amber)]"
                  >
                    {t("pricing.seeDetailed")}
                  </Link>
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]"
                >
                  {t("pricing.getQuote")}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
