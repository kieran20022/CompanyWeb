import { ArrowRight, Target, Heart, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import AnimatedGrid from "../components/AnimatedGrid";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const valueIcons = [Target, Heart, Zap, Users];

export default function AboutPage() {
  const { lang, t } = useLanguage();
  const milestones = translations[lang].aboutPage.milestones;
  const values = translations[lang].aboutPage.values;

  return (
    <div className="min-h-screen bg-[var(--color-midnight)]">
      <section className="noise-bg relative border-b border-[var(--color-border)] bg-[var(--color-surface)] pt-32 pb-20 md:pt-40 md:pb-28">
        <AnimatedGrid />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
              {t("aboutPage.label")}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t("aboutPage.heading")}
              <span className="text-gradient">{t("aboutPage.headingHighlight")}</span>
              {t("aboutPage.headingSuffix")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              {t("aboutPage.description")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                  {t("aboutPage.storyLabel")}
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {t("aboutPage.storyHeading")}
                </h2>
                <div className="mt-6 space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                  <p>{t("aboutPage.storyP1")}</p>
                  <p>{t("aboutPage.storyP2")}</p>
                  <p>{t("aboutPage.storyP3")}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  {t("aboutPage.journeyHeading")}
                </h3>
                <div className="space-y-6">
                  {milestones.map((m, i) => (
                    <div key={m.year} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-amber)]/10 font-display text-xs font-bold text-[var(--color-amber)]">
                          {m.year}
                        </div>
                        {i < milestones.length - 1 && (
                          <div className="mt-2 h-full w-px bg-gradient-to-b from-[var(--color-amber)]/20 to-transparent" />
                        )}
                      </div>
                      <p className="pb-6 text-sm text-[var(--color-text-secondary)]">
                        {m.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                {t("aboutPage.valuesLabel")}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t("aboutPage.valuesHeading")}
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="h-full group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 transition-all duration-500 hover:border-[var(--color-amber)]/15">
                    <div className="mb-4 inline-flex rounded-xl bg-[var(--color-amber-glow)] p-2.5 text-[var(--color-amber)]">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-base font-bold">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t("aboutPage.ctaHeading")}
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              {t("aboutPage.ctaDescription")}
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-8 py-4 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]"
            >
              {t("aboutPage.ctaButton")}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
