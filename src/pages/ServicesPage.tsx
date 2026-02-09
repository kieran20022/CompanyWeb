import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  Link as LinkIcon,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import AnimatedGrid from "../components/AnimatedGrid";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const icons = [Globe, ShoppingCart, Search, Smartphone, LinkIcon, BarChart3];
const slugs = [
  "custom-website-design",
  "e-commerce",
  "seo-optimization",
  "mobile-first-design",
  "crm-integrations",
  "analytics-reporting",
];

export default function ServicesPage() {
  const { lang, t } = useLanguage();
  const items = translations[lang].servicesPage.items;

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
              {t("servicesPage.label")}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t("servicesPage.heading")}
              <span className="text-gradient">{t("servicesPage.headingHighlight")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              {t("servicesPage.description")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {items.map((service, i) => {
              const Icon = icons[i];
              return (
                <FadeIn key={slugs[i]}>
                  <div
                    id={slugs[i]}
                    className={`grid items-start gap-12 lg:grid-cols-2 ${
                      i % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="mb-4 inline-flex rounded-xl bg-[var(--color-amber-glow)] p-3 text-[var(--color-amber)]">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <h2 className="font-display text-3xl font-bold tracking-tight">
                        {service.title}
                      </h2>
                      <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
                        {service.description}
                      </p>
                      <Link
                        to="/contact"
                        className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-amber)] transition-colors hover:text-[var(--color-amber-light)]"
                      >
                        {t("servicesPage.getStarted")}{service.title.toLowerCase()}
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>

                    <div
                      className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 ${
                        i % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                        {t("servicesPage.whatsIncluded")}
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature) => (
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
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t("servicesPage.ctaHeading")}
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              {t("servicesPage.ctaDescription")}
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-8 py-4 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]"
            >
              {t("servicesPage.ctaButton")}
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
