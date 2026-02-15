import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedGrid from "./AnimatedGrid";
import { useLanguage } from "../i18n/LanguageContext";
import { useHydrated } from "../hooks/useHydrated";

export default function Hero() {
  const { t } = useLanguage();
  const hydrated = useHydrated();

  return (
    <section className="noise-bg relative min-h-screen overflow-hidden bg-[var(--color-midnight)]">
      <AnimatedGrid />

      <div className="pointer-events-none absolute -right-32 top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--color-amber)] opacity-[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500 opacity-[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 pb-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.h1
              className="mt-8 font-display text-[clamp(2.5rem,6vw,5rem)] font-800 leading-[0.95] tracking-tight"
              initial={hydrated ? { opacity: 0, y: 40 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
            >
              {t("hero.heading1")}
              <br />
              {t("hero.heading2").replace(t("hero.headingHighlight"), "")}{" "}
              <span className="text-gradient">{t("hero.headingHighlight")}</span>
              <br />
              {t("hero.heading3")}
            </motion.h1>

            <motion.p
              className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-text-secondary)]"
              initial={hydrated ? { opacity: 0, y: 30 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0, 1] }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={hydrated ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0, 1] }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-bold text-[var(--color-midnight)] shadow-[0_0_40px_rgba(245,158,11,0.2)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(245,158,11,0.35)] hover:scale-[1.02]"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border-hover)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-text-muted)] hover:bg-white/[0.03]"
              >
                {t("hero.ctaSecondary")}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <motion.div
              className="relative"
              initial={hydrated ? { opacity: 0, scale: 0.9 } : false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
            >
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-1 shadow-2xl shadow-black/40">
                <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  <div className="ml-4 flex-1 rounded-md bg-[var(--color-midnight)] px-3 py-1.5">
                    <span className="text-[11px] text-[var(--color-text-muted)]">yourbusiness.com</span>
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <div className="h-6 w-3/4 rounded bg-[var(--color-amber)]/10" />
                  <div className="h-4 w-full rounded bg-white/5" />
                  <div className="h-4 w-5/6 rounded bg-white/5" />
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-lg bg-white/[0.03] border border-[var(--color-border)]" />
                    <div className="h-24 rounded-lg bg-white/[0.03] border border-[var(--color-border)]" />
                    <div className="h-24 rounded-lg bg-white/[0.03] border border-[var(--color-border)]" />
                  </div>
                  <div className="mt-4 h-4 w-2/3 rounded bg-white/5" />
                  <div className="h-4 w-1/2 rounded bg-white/5" />
                  <div className="mt-4 h-10 w-40 rounded-full bg-[var(--color-amber)]/20" />
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-20 flex justify-center border-t border-[var(--color-border)] pt-10 lg:mt-24"
          initial={hydrated ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0, 1] }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-amber)] bg-[var(--color-amber)]/10 px-8 py-4 text-base font-bold text-[var(--color-amber)] transition-all duration-300 hover:bg-[var(--color-amber)] hover:text-[var(--color-midnight)] hover:shadow-[0_0_60px_rgba(245,158,11,0.3)]"
          >
            {t("hero.beTheFirst")}
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
