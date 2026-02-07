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

const services = [
  {
    icon: Globe,
    title: "Custom Website Design",
    slug: "custom-website-design",
    description:
      "Every business is unique, and your website should reflect that. We design from scratch — no templates, no shortcuts. Your site will be a one-of-a-kind digital storefront built to match your brand, your voice, and your goals.",
    features: [
      "Bespoke layouts and visual identity",
      "Brand-consistent typography and color palette",
      "Custom illustrations and graphics",
      "Conversion-optimized user experience",
      "Figma mockups included for review",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    slug: "e-commerce",
    description:
      "Sell products or services online with a secure, reliable store. We integrate with Stripe, PayPal, and other major payment providers so your customers can buy with confidence — and you can manage everything from one dashboard.",
    features: [
      "Secure payment processing (Stripe, PayPal)",
      "Product catalog with categories and filters",
      "Shopping cart and checkout optimization",
      "Inventory management tools",
      "Order notifications and tracking",
    ],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    slug: "seo-optimization",
    description:
      "What's the point of a great website if no one can find it? We build SEO into the foundation — proper meta tags, fast load times, structured data, mobile-friendliness, and keyword-optimized content that helps you rank on Google.",
    features: [
      "Technical SEO audit and implementation",
      "Keyword research and content strategy",
      "Schema markup and structured data",
      "Page speed optimization",
      "Google Search Console setup and monitoring",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    slug: "mobile-first-design",
    description:
      "Over 60% of web traffic comes from mobile devices. We design mobile-first, ensuring your website looks stunning and performs flawlessly on phones, tablets, and desktops alike — because every visitor matters.",
    features: [
      "Responsive design across all screen sizes",
      "Touch-optimized navigation and interactions",
      "Fast mobile load times",
      "Mobile-specific UX considerations",
      "Cross-browser compatibility testing",
    ],
  },
  {
    icon: LinkIcon,
    title: "CRM & Integrations",
    slug: "crm-integrations",
    description:
      "Your website shouldn't live in isolation. We connect it to the tools you already use — CRMs like HubSpot and Salesforce, email marketing platforms, booking systems, and more. Everything working together, seamlessly.",
    features: [
      "HubSpot, Salesforce, and Zoho CRM integration",
      "Email marketing (Mailchimp, ConvertKit)",
      "Booking and scheduling tools (Calendly)",
      "Live chat and support widgets",
      "Custom API integrations",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    slug: "analytics-reporting",
    description:
      "Know exactly how your website performs. We set up Google Analytics, track key metrics, and deliver clear monthly reports that show you who's visiting, what they're doing, and where you can improve.",
    features: [
      "Google Analytics 4 setup and configuration",
      "Custom dashboard with key metrics",
      "Monthly performance reports",
      "Conversion tracking and goal setup",
      "Heatmaps and user behavior analysis",
    ],
  },
];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Web design services for{" "}
              <span className="text-gradient">small businesses</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              From custom website design and e-commerce to SEO optimization and
              CRM integrations — everything you need to establish a powerful
              online presence and grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <FadeIn key={service.slug}>
                <div
                  id={service.slug}
                  className={`grid items-start gap-12 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Info side */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mb-4 inline-flex rounded-xl bg-[var(--color-amber-glow)] p-3 text-[var(--color-amber)]">
                      <service.icon size={24} strokeWidth={1.5} />
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
                      Get started with {service.title.toLowerCase()}
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>

                  {/* Features card */}
                  <div
                    className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      What's included
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Not sure what you need?
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              Book a free consultation and we'll help you figure out exactly
              which services will make the biggest impact for your business.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-8 py-4 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]"
            >
              Book Free Consultation
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
