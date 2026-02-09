import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  Link as LinkIcon,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const icons = [Globe, ShoppingCart, Search, Smartphone, LinkIcon, BarChart3];
const numbers = ["01", "02", "03", "04", "05", "06"];

export default function Services() {
  const { lang, t } = useLanguage();
  const items = translations[lang].services.items;

  return (
    <section
      id="services"
      className="noise-bg relative bg-[var(--color-surface)] py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                {t("services.label")}
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                {t("services.heading")}
                <span className="text-gradient">{t("services.headingHighlight")}</span>
              </h2>
              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
                {t("services.description")}
              </p>
              <Link
                to="/services"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-amber)] transition-colors hover:text-[var(--color-amber-light)]"
              >
                {t("services.exploreAll")}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((service, i) => {
                const Icon = icons[i];
                return (
                  <FadeIn key={i} delay={i * 0.06}>
                    <div className="h-full group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 transition-all duration-500 hover:border-[var(--color-amber)]/20 hover:bg-[var(--color-surface-hover)]">
                      <span className="pointer-events-none absolute -right-2 -top-4 font-display text-[80px] font-800 leading-none text-white/[0.02] transition-all duration-500 group-hover:text-[var(--color-amber)]/[0.06]">
                        {numbers[i]}
                      </span>
                      <div className="relative z-10">
                        <div className="mb-4 inline-flex rounded-xl bg-[var(--color-amber-glow)] p-2.5 text-[var(--color-amber)] transition-all duration-300 group-hover:bg-[var(--color-amber)]/20">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-display text-base font-bold text-[var(--color-text-primary)]">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
