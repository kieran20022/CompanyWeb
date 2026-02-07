import { useState, useEffect, useRef, useId } from "react";
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
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "../components/FadeIn";
import AnimatedGrid from "../components/AnimatedGrid";

interface FAQItem {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  content: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  };
}

const faqs: FAQItem[] = [
  {
    id: "custom-design",
    icon: Globe,
    title: "Custom Website Design",
    subtitle: "What makes a custom website different from a template?",
    color: "from-amber-500/20 to-orange-500/20",
    content: {
      heading: "Why Custom Design Matters for Your Business",
      paragraphs: [
        "A custom website is built from scratch specifically for your business. Unlike templates that thousands of other sites use, every element — from the layout and typography to the interactions and user flow — is designed around your brand, your audience, and your goals.",
        "Template websites force your business into a pre-made box. You're limited to the layouts, features, and design choices someone else made. Custom design flips that: we start with your business needs and build outward.",
        "The result is a site that feels genuinely yours, converts better because it's optimized for your specific customers, and stands out in a sea of cookie-cutter competitors.",
      ],
      bullets: [
        "Unique visual identity that matches your brand",
        "Layouts designed around your specific conversion goals",
        "No unnecessary bloat — only the features you need",
        "Full ownership of your design and code",
        "Easier to scale and modify as your business grows",
      ],
    },
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce",
    subtitle: "How do you build online stores for small businesses?",
    color: "from-emerald-500/20 to-teal-500/20",
    content: {
      heading: "Selling Online Without the Complexity",
      paragraphs: [
        "We build e-commerce sites that are simple to manage but powerful under the hood. Whether you sell 5 products or 500, we set up a secure, reliable store that integrates with your preferred payment processor — Stripe, PayPal, Square, or others.",
        "Every store comes with a clean product catalog, intuitive checkout flow, and inventory management. We optimize the buying experience to reduce cart abandonment and maximize conversions.",
        "You don't need to be technical to manage your store. We build admin dashboards that let you add products, adjust pricing, manage orders, and track sales — all without touching code.",
      ],
      bullets: [
        "Secure payment processing with Stripe, PayPal, or Square",
        "Product catalog with categories, filters, and search",
        "Optimized checkout to minimize cart abandonment",
        "Inventory tracking and low-stock alerts",
        "Order management and automated notifications",
        "Sales analytics and revenue reporting",
      ],
    },
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    subtitle: "How do you help my business rank on Google?",
    color: "from-blue-500/20 to-indigo-500/20",
    content: {
      heading: "Getting Found by the Right Customers",
      paragraphs: [
        "SEO (Search Engine Optimization) is the practice of making your website visible to people searching for your services on Google. We build SEO into the foundation of every website — it's not an afterthought.",
        "This starts with technical SEO: fast load times, proper HTML structure, mobile responsiveness, meta tags, and structured data (schema markup) that helps Google understand your content. Then we layer on content optimization — targeting the keywords your ideal customers actually search for.",
        "We also set up Google Search Console and Analytics so you can track your rankings and traffic over time. SEO is a long game, but with the right foundation, you'll see steady improvement in your search visibility.",
      ],
      bullets: [
        "Technical SEO audit and implementation",
        "Keyword research tailored to your industry",
        "Optimized meta titles, descriptions, and headings",
        "Schema markup for rich search results",
        "Page speed optimization (Core Web Vitals)",
        "Google Search Console and Analytics setup",
      ],
    },
  },
  {
    id: "mobile-first",
    icon: Smartphone,
    title: "Mobile-First Design",
    subtitle: "Why should my website be designed for mobile first?",
    color: "from-violet-500/20 to-purple-500/20",
    content: {
      heading: "More Than Half Your Visitors Are on Their Phone",
      paragraphs: [
        "Over 60% of all web traffic now comes from mobile devices. If your website isn't optimized for phones and tablets, you're giving more than half your visitors a poor experience — and they'll leave.",
        "Mobile-first design means we start by designing for the smallest screen, then scale up for tablets and desktops. This ensures the mobile experience is never an afterthought. Navigation is thumb-friendly, text is readable without zooming, and buttons are easy to tap.",
        "Google also uses mobile-first indexing, meaning it primarily uses your site's mobile version for ranking. A mobile-optimized site isn't just better for users — it's better for SEO.",
      ],
      bullets: [
        "Responsive design that adapts to any screen size",
        "Touch-optimized buttons, menus, and interactions",
        "Fast loading on mobile networks",
        "Readable typography without zooming or scrolling",
        "Cross-browser testing on iOS and Android",
      ],
    },
  },
  {
    id: "crm",
    icon: LinkIcon,
    title: "CRM & Integrations",
    subtitle: "Can you connect my website to the tools I already use?",
    color: "from-rose-500/20 to-pink-500/20",
    content: {
      heading: "Your Website, Connected to Everything",
      paragraphs: [
        "Your website shouldn't be an island. We integrate it with the CRM, email marketing, scheduling, and business tools you already rely on — so leads flow directly into your pipeline and nothing falls through the cracks.",
        "Whether you use HubSpot, Salesforce, Zoho, Mailchimp, ConvertKit, Calendly, or something else, we can connect it. Form submissions automatically create contacts in your CRM. New subscribers get added to your email list. Booking requests go straight to your calendar.",
        "We also build custom integrations using APIs when off-the-shelf solutions don't fit. The goal is simple: automate the busywork so you can focus on serving your customers.",
      ],
      bullets: [
        "CRM integration (HubSpot, Salesforce, Zoho)",
        "Email marketing (Mailchimp, ConvertKit, ActiveCampaign)",
        "Scheduling tools (Calendly, Acuity, Cal.com)",
        "Live chat and support (Intercom, Drift, Crisp)",
        "Custom API integrations for specialized tools",
        "Automated lead capture and nurturing workflows",
      ],
    },
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Reporting",
    subtitle: "How will I know if my website is actually working?",
    color: "from-cyan-500/20 to-sky-500/20",
    content: {
      heading: "Measuring What Matters",
      paragraphs: [
        "A website without analytics is like running a shop with no idea who walks in or what they buy. We set up comprehensive tracking so you always know how your site is performing.",
        "We configure Google Analytics 4 with custom events, goals, and conversion tracking tailored to your business. Want to know how many people filled out your contact form, clicked your phone number, or viewed your pricing page? We track it all.",
        "Every month, you get a clear report that cuts through the noise — showing you traffic trends, top-performing pages, where visitors come from, and what actions they take. No jargon, just actionable insights.",
      ],
      bullets: [
        "Google Analytics 4 setup with custom events",
        "Conversion tracking for forms, calls, and purchases",
        "Monthly performance reports in plain English",
        "Traffic source analysis (organic, social, referral)",
        "User behavior insights (heatmaps, session recordings)",
        "Recommendations to improve performance",
      ],
    },
  },
  {
    id: "pricing",
    icon: DollarSign,
    title: "Pricing & Budget",
    subtitle: "How much does a website cost and what's included?",
    color: "from-amber-500/20 to-yellow-500/20",
    content: {
      heading: "Transparent, Affordable Pricing",
      paragraphs: [
        "Our websites start at $300 for a simple, professional site. Most small business projects fall in the $300–$1,500 range depending on complexity, number of pages, and features needed.",
        "Every project includes custom design (no templates), mobile responsiveness, basic SEO, and post-launch support. We don't charge hidden fees for revisions during the design process — we work with you until you're happy.",
        "We're transparent about pricing from day one. After our initial consultation, you'll receive a detailed proposal with a clear breakdown of costs. No surprises, no scope creep charges, no awkward conversations.",
      ],
      bullets: [
        "Starter sites from $300 (up to 5 pages)",
        "Growth packages from $800 (up to 15 pages + CRM)",
        "E-commerce and custom builds from $1,500",
        "No hidden fees or surprise charges",
        "Flexible payment plans available",
        "Free consultation and detailed proposal",
      ],
    },
  },
  {
    id: "process",
    icon: Workflow,
    title: "Our Process",
    subtitle: "What does the project timeline look like?",
    color: "from-green-500/20 to-emerald-500/20",
    content: {
      heading: "From Idea to Launch in Weeks, Not Months",
      paragraphs: [
        "Our process is designed to be simple and stress-free. It starts with a free consultation where we learn about your business, goals, and budget. From there, we create a proposal with a clear scope and timeline.",
        "Once approved, we move into design — creating mockups in Figma that you can review and provide feedback on. After design approval, we build the site using modern, fast technologies. You'll get a staging link to test everything before it goes live.",
        "Most projects launch within 2–4 weeks. After launch, we provide ongoing support to fix any issues, make small updates, and help you get the most from your new site. We're a partner, not just a vendor.",
      ],
      bullets: [
        "Free consultation and project scoping",
        "Design mockups in Figma for your review",
        "Development on a staging site you can test",
        "Launch day setup and go-live support",
        "Post-launch support and maintenance",
        "Typical timeline: 2–4 weeks for most projects",
      ],
    },
  },
];

function ExpandableCard({
  item,
  isActive,
  onOpen,
  onClose,
}: {
  item: FAQItem;
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const layoutId = `faq-card-${item.id}`;
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll lock when expanded
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

  // Escape key to close
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
      {/* Collapsed card */}
      <motion.div
        layoutId={layoutId}
        onClick={onOpen}
        className="group cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors duration-300 hover:border-[var(--color-amber)]/20"
        style={{ borderRadius: 16 }}
      >
        <div className="flex items-center gap-4 p-5 sm:p-6">
          <motion.div
            layoutId={`${layoutId}-icon`}
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color}`}
          >
            <item.icon
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
            Read more
          </div>
        </div>
      </motion.div>

      {/* Expanded overlay */}
      <AnimatePresence>
        {isActive && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Expanded card */}
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
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]"
                >
                  <X size={16} />
                </button>

                {/* Header */}
                <div className="border-b border-[var(--color-border)] p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <motion.div
                      layoutId={`${layoutId}-icon`}
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color}`}
                    >
                      <item.icon
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

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="p-6 sm:p-8"
                >
                  <h4 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
                    {item.content.heading}
                  </h4>

                  <div className="mt-4 space-y-3">
                    {item.content.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-[var(--color-text-secondary)]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {item.content.bullets && (
                    <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                        What's included
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {item.content.bullets.map((bullet) => (
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
              FAQ
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need{" "}
              <span className="text-gradient">to know</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Common questions about our web design services, pricing, process,
              and what it's like to work with us. Click any topic to learn more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.05}>
                <ExpandableCard
                  item={item}
                  isActive={activeId === item.id}
                  onOpen={() => setActiveId(item.id)}
                  onClose={() => setActiveId(null)}
                />
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
              Still have questions?
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              We're always happy to chat. Reach out and we'll get back to you
              within 24 hours.
            </p>
            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-8 py-4 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]"
            >
              Get in Touch
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
