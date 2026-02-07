import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import AnimatedGrid from "../components/AnimatedGrid";

const tiers = [
  {
    name: "Starter",
    price: "$300",
    description: "Perfect for freelancers and sole traders who need a clean, professional online presence.",
    features: [
      "Up to 5 pages",
      "Custom responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "Mobile-optimized",
      "1 month post-launch support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$800",
    description: "For established small businesses ready to expand their digital reach and convert more visitors.",
    features: [
      "Up to 15 pages",
      "Advanced custom design",
      "Full SEO optimization",
      "CRM integration (HubSpot, etc.)",
      "Blog or news section",
      "Analytics dashboard setup",
      "3 months post-launch support",
      "Content writing assistance",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "$1,500+",
    description: "For businesses that need e-commerce, complex integrations, or a fully custom web application.",
    features: [
      "Unlimited pages",
      "E-commerce functionality",
      "Custom integrations & APIs",
      "Advanced analytics & tracking",
      "Priority support (6 months)",
      "Performance optimization",
      "A/B testing setup",
      "Dedicated project manager",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects take 2-4 weeks from consultation to launch. More complex sites with e-commerce or custom integrations may take 4-8 weeks. We'll give you a clear timeline during our initial consultation.",
  },
  {
    q: "Do I need to provide my own content?",
    a: "Not necessarily. We can help with copywriting and content creation. If you have existing content, great — we'll work with what you have and optimize it for the web.",
  },
  {
    q: "What if I need changes after launch?",
    a: "All plans include post-launch support. After that, we offer affordable maintenance packages or you can request one-off changes at our standard hourly rate.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. Your website grows with your business. We can add features, pages, or integrations at any time. Just get in touch and we'll provide a quote.",
  },
  {
    q: "Do you offer hosting?",
    a: "We can help you set up hosting on fast, reliable platforms like Vercel, Netlify, or your preferred provider. Hosting costs are separate and typically very affordable ($0–$20/month).",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern web technologies like React, Next.js, and Tailwind CSS — resulting in fast, accessible, and SEO-friendly websites that are easy to maintain.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-midnight)]">
      {/* Hero */}
      <section className="noise-bg relative border-b border-[var(--color-border)] bg-[var(--color-surface)] pt-32 pb-20 md:pt-40 md:pb-28">
        <AnimatedGrid />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
              Pricing
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Transparent pricing,{" "}
              <span className="text-gradient">no surprises</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Affordable website packages for small businesses. Every project is
              custom, but these tiers give you a clear starting point. Need
              something different? We'll build a tailored proposal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 ${
                    tier.highlight
                      ? "border-[var(--color-amber)]/30 bg-[var(--color-surface-elevated)] shadow-[0_0_60px_rgba(245,158,11,0.06)]"
                      : "border-[var(--color-border)] bg-[var(--color-surface)]"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute right-4 top-4 rounded-full bg-[var(--color-amber)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-midnight)]">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="font-display text-lg font-bold">
                      {tier.name}
                    </h3>
                    <div className="mt-4">
                      <span className="font-display text-5xl font-bold text-[var(--color-amber)]">
                        {tier.price}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="mt-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
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

                  <Link
                    to="/contact"
                    className={`group mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                      tier.highlight
                        ? "bg-[var(--color-amber)] text-[var(--color-midnight)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]"
                        : "border border-[var(--color-border-hover)] text-[var(--color-text-primary)] hover:border-[var(--color-amber)]/30 hover:bg-[var(--color-amber-glow)]"
                    }`}
                  >
                    Get Started
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
              All prices are starting points. Final pricing depends on your
              specific requirements.{" "}
              <Link
                to="/contact"
                className="text-[var(--color-amber)] underline decoration-[var(--color-amber)]/30 underline-offset-2 hover:decoration-[var(--color-amber)]"
              >
                Get a custom quote
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                FAQ
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-[var(--color-amber)]"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="font-display text-sm font-bold text-[var(--color-text-primary)]">
                        {faq.q}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
