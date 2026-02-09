import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  Link as LinkIcon,
  BarChart3,
  DollarSign,
  Workflow,
  Wrench,
  Palette,
  Server,
  FileText,
  X,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "../components/FadeIn";
import AnimatedGrid from "../components/AnimatedGrid";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const faqIcons: LucideIcon[] = [
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  LinkIcon,
  BarChart3,
  DollarSign,
  Workflow,
  Wrench,
  Palette,
  Server,
  FileText,
];

const faqColors = [
  "from-amber-500/20 to-orange-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-blue-500/20 to-indigo-500/20",
  "from-violet-500/20 to-purple-500/20",
  "from-rose-500/20 to-pink-500/20",
  "from-cyan-500/20 to-sky-500/20",
  "from-amber-500/20 to-yellow-500/20",
  "from-green-500/20 to-emerald-500/20",
  "from-orange-500/20 to-red-500/20",
  "from-pink-500/20 to-fuchsia-500/20",
  "from-indigo-500/20 to-blue-500/20",
  "from-teal-500/20 to-cyan-500/20",
];

interface FAQItemData {
  id: string;
  title: string;
  subtitle: string;
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// ── Mobile Accordion Item ──
function AccordionItem({
  item,
  icon: Icon,
  color,
  isOpen,
  onToggle,
  whatsIncludedLabel,
}: {
  item: FAQItemData;
  icon: LucideIcon;
  color: string;
  isOpen: boolean;
  onToggle: () => void;
  whatsIncludedLabel: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors duration-300">
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color}`}
        >
          <Icon
            size={20}
            className="text-[var(--color-text-primary)]"
            strokeWidth={1.5}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-sm font-bold text-[var(--color-text-primary)]">
            {item.title}
          </h3>
          <p className="mt-0.5 text-xs text-[var(--color-text-muted)] line-clamp-1">
            {item.subtitle}
          </p>
        </div>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[var(--color-text-muted)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-[var(--color-border)] px-5 py-5">
              <h4 className="font-display text-base font-bold text-[var(--color-text-primary)]">
                {item.heading}
              </h4>
              <div className="mt-3 space-y-2.5">
                {item.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-[var(--color-text-secondary)]"
                  >
                    {p}
                  </p>
                ))}
              </div>
              {item.bullets && (
                <div className="mt-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-4">
                  <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {whatsIncludedLabel}
                  </p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-amber)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Desktop Expandable Card ──
function ExpandableCard({
  item,
  icon: Icon,
  color,
  isActive,
  onOpen,
  onClose,
  readMoreLabel,
  whatsIncludedLabel,
}: {
  item: FAQItemData;
  icon: LucideIcon;
  color: string;
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
  readMoreLabel: string;
  whatsIncludedLabel: string;
}) {
  const layoutId = `faq-card-${item.id}`;
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isActive, onClose]);

  return (
    <>
      <motion.div
        layoutId={layoutId}
        onClick={onOpen}
        className="group cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors duration-300 hover:border-[var(--color-amber)]/20"
        style={{ borderRadius: 16 }}
      >
        <div className="flex items-center gap-4 p-5 sm:p-6">
          <motion.div
            layoutId={`${layoutId}-icon`}
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color}`}
          >
            <Icon
              size={22}
              className="text-[var(--color-text-primary)]"
              strokeWidth={1.5}
            />
          </motion.div>
          <div className="min-w-0 flex-1">
            <motion.h3
              layoutId={`${layoutId}-title`}
              className="font-display text-base font-bold text-[var(--color-text-primary)]"
            >
              {item.title}
            </motion.h3>
            <motion.p
              layoutId={`${layoutId}-subtitle`}
              className="mt-0.5 text-sm text-[var(--color-text-muted)]"
            >
              {item.subtitle}
            </motion.p>
          </div>
          <div className="flex-shrink-0 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)] transition-all duration-300 group-hover:border-[var(--color-amber)]/30 group-hover:text-[var(--color-amber)]">
            {readMoreLabel}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={onClose}
            />

            <div
              className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 pt-20 pb-10 sm:p-6 sm:pt-24"
              onClick={onClose}
            >
              <motion.div
                layoutId={layoutId}
                ref={contentRef}
                className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
                style={{ borderRadius: 16 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]"
                >
                  <X size={16} />
                </button>

                <div className="border-b border-[var(--color-border)] p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <motion.div
                      layoutId={`${layoutId}-icon`}
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color}`}
                    >
                      <Icon
                        size={22}
                        className="text-[var(--color-text-primary)]"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    <div className="min-w-0 pr-8">
                      <motion.h3
                        layoutId={`${layoutId}-title`}
                        className="font-display text-xl font-bold text-[var(--color-text-primary)] sm:text-2xl"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`${layoutId}-subtitle`}
                        className="mt-1 text-sm text-[var(--color-text-muted)]"
                      >
                        {item.subtitle}
                      </motion.p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="p-6 sm:p-8"
                >
                  <h4 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
                    {item.heading}
                  </h4>

                  <div className="mt-4 space-y-3">
                    {item.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-[var(--color-text-secondary)]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {item.bullets && (
                    <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                        {whatsIncludedLabel}
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {item.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-amber)]" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function FAQPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const { lang, t } = useLanguage();
  const faqItems = translations[lang].faqPage.items;

  return (
    <div className="min-h-screen bg-[var(--color-midnight)]">
      {/* Hero */}
      <section className="noise-bg relative border-b border-[var(--color-border)] bg-[var(--color-surface)] pt-32 pb-20 md:pt-40 md:pb-28">
        <AnimatedGrid />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
              {t("faqPage.label")}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t("faqPage.heading")}
              <span className="text-gradient">{t("faqPage.headingHighlight")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              {t("faqPage.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.05}>
                {isMobile ? (
                  <AccordionItem
                    item={item}
                    icon={faqIcons[i] || FileText}
                    color={faqColors[i] || faqColors[0]}
                    isOpen={openAccordion === item.id}
                    onToggle={() =>
                      setOpenAccordion(openAccordion === item.id ? null : item.id)
                    }
                    whatsIncludedLabel={t("faqPage.whatsIncluded")}
                  />
                ) : (
                  <ExpandableCard
                    item={item}
                    icon={faqIcons[i] || FileText}
                    color={faqColors[i] || faqColors[0]}
                    isActive={activeId === item.id}
                    onOpen={() => setActiveId(item.id)}
                    onClose={() => setActiveId(null)}
                    readMoreLabel={t("faqPage.readMore")}
                    whatsIncludedLabel={t("faqPage.whatsIncluded")}
                  />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t("faqPage.ctaHeading")}
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              {t("faqPage.ctaDescription")}
            </p>
            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-8 py-4 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]"
            >
              {t("faqPage.ctaButton")}
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
