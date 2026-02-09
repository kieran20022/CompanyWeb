import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[var(--color-midnight)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          className="noise-bg relative overflow-hidden rounded-3xl border border-[var(--color-amber)]/10 bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface-elevated)] to-[var(--color-surface)]"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--color-amber)] opacity-[0.06] blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-indigo-500 opacity-[0.04] blur-[60px]" />

          <div className="relative z-10 px-8 py-16 text-center md:px-16 md:py-24">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
              {t("cta.label")}
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t("cta.heading")}
              <span className="text-gradient">{t("cta.headingHighlight")}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--color-text-secondary)]">
              {t("cta.description")}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-8 py-4 text-sm font-bold text-[var(--color-midnight)] shadow-[0_0_40px_rgba(245,158,11,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(245,158,11,0.35)]"
              >
                {t("cta.ctaPrimary")}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-hover)] px-8 py-4 text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-text-muted)] hover:bg-white/[0.03]"
              >
                {t("cta.ctaSecondary")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
