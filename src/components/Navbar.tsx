import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/LanguageContext";

const flags: Record<Language, { emoji: string; label: string }> = {
  nl: { emoji: "🇳🇱", label: "Nederlands" },
  en: { emoji: "🇬🇧", label: "English" },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.portfolio"), href: "/portfolio" },
    { label: t("nav.pricing"), href: "/pricing" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.faq"), href: "/faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const otherLang: Language = lang === "nl" ? "en" : "nl";

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-midnight)]/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            to="/"
            className="font-display text-xl font-bold tracking-tight"
          >
            Bliksem<span className="text-gradient">IT</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "text-[var(--color-amber)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-px bg-[var(--color-amber)]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {/* Language switcher - only visible at top */}
            <AnimatePresence>
              {!scrolled && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setLang(otherLang)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 text-sm transition-all duration-200 hover:border-[var(--color-amber)]/30 hover:bg-[var(--color-surface)]"
                  title={`Switch to ${flags[otherLang].label}`}
                  aria-label={`Switch to ${flags[otherLang].label}`}
                >
                  <span className="text-[15px] leading-none">
                    {flags[otherLang].emoji}
                  </span>
                </motion.button>
              )}
            </AnimatePresence>

            <Link
              to="/contact"
              className="group flex items-center gap-1.5 rounded-full border border-[var(--color-amber)] bg-[var(--color-amber)]/10 px-5 py-2 text-[13px] font-semibold tracking-wide text-[var(--color-amber)] transition-all duration-300 hover:bg-[var(--color-amber)] hover:text-[var(--color-midnight)]"
            >
              {t("nav.cta")}
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile: language switch + toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <AnimatePresence>
              {!scrolled && !mobileOpen && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setLang(otherLang)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 text-sm transition-all duration-200 hover:border-[var(--color-amber)]/30"
                  title={`Switch to ${flags[otherLang].label}`}
                  aria-label={`Switch to ${flags[otherLang].label}`}
                >
                  <span className="text-[15px] leading-none">
                    {flags[otherLang].emoji}
                  </span>
                </motion.button>
              )}
            </AnimatePresence>

            <button
              className="relative z-50 text-[var(--color-text-primary)]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-midnight)] md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    className={`block border-b border-[var(--color-border)] py-5 font-display text-3xl font-bold transition-colors ${
                      location.pathname === link.href
                        ? "text-[var(--color-amber)]"
                        : "text-[var(--color-text-primary)] hover:text-[var(--color-amber)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-amber)] bg-[var(--color-amber)] px-8 py-3.5 font-semibold text-[var(--color-midnight)] transition-all duration-300"
                >
                  {t("nav.cta")}
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
