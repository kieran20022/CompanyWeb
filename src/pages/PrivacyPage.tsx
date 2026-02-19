import { motion } from "framer-motion";
import AnimatedGrid from "../components/AnimatedGrid";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function PrivacyPage() {
  const { lang, t } = useLanguage();
  const sections = translations[lang].privacyPage.sections;

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
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t("privacyPage.heading")}
            </h1>
            <p className="mt-6 text-lg text-[var(--color-text-secondary)]">
              {t("privacyPage.lastUpdated")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h2 className="font-display text-xl font-bold text-[var(--color-text-primary)]">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
