import { ArrowUpRight, ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import AnimatedGrid from "../components/AnimatedGrid";
import { useLanguage } from "../i18n/LanguageContext";

export default function PortfolioPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--color-midnight)]">
      <section className="noise-bg relative border-b border-[var(--color-border)] bg-[var(--color-surface)] pt-32 pb-20 md:pt-40 md:pb-28">
        <AnimatedGrid />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
              {t("portfolioPage.label")}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t("portfolioPage.heading")}
              <span className="text-gradient">{t("portfolioPage.headingHighlight")}</span>
              {t("portfolioPage.headingSuffix")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              {t("portfolioPage.description")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="sr-only">{t("portfolioPage.label")}</h2>

          {/* Notice banner */}
          <FadeIn>
            <div className="mb-12 flex items-start gap-3 rounded-xl border border-[var(--color-amber)]/25 bg-[var(--color-amber-glow)] px-5 py-4">
              <Info size={16} className="mt-0.5 shrink-0 text-[var(--color-amber)]" />
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {t("portfolioPage.exampleNotice")}
              </p>
            </div>
          </FadeIn>

          {/* Live example card */}
          <FadeIn delay={0.05}>
            <a
              href="https://example-one.bliksemit.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-amber)]/30 bg-[var(--color-surface)] transition-all duration-500 hover:border-[var(--color-amber)]/60 hover:shadow-[0_0_40px_rgba(245,158,11,0.08)] md:flex-row"
            >
              {/* Screenshot preview */}
              <div className="relative min-h-56 overflow-hidden bg-[var(--color-midnight)] md:w-1/2 md:min-h-0">
                <img
                  src="/preview-example-one.jpg"
                  alt="BliksemIT example website preview"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-surface)]/10 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center p-8">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[var(--color-amber)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-midnight)]">
                    {t("portfolioPage.exampleBadge")}
                  </span>
                  <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                    {t("portfolioPage.exampleCategory")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  {t("portfolioPage.exampleTitle")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {t("portfolioPage.exampleDescription")}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-amber)]">
                  {t("portfolioPage.exampleVisit")}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t("portfolioPage.ctaHeading")}
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              {t("portfolioPage.ctaDescription")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-8 py-4 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]"
              >
                {t("portfolioPage.ctaPrimary")}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border-hover)] px-8 py-4 text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-text-muted)]"
              >
                {t("portfolioPage.ctaSecondary")}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
