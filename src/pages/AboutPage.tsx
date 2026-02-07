import { ArrowRight, Target, Heart, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import AnimatedGrid from "../components/AnimatedGrid";

const values = [
  {
    icon: Target,
    title: "Purpose-Driven Design",
    description:
      "Every pixel has a purpose. We don't design to impress other designers — we design to help your business grow.",
  },
  {
    icon: Heart,
    title: "Genuine Partnership",
    description:
      "We treat your business like our own. Your success is our success, and we're invested in the long haul.",
  },
  {
    icon: Zap,
    title: "Speed & Simplicity",
    description:
      "No bloat, no jargon, no overengineering. We build fast, ship fast, and keep things refreshingly simple.",
  },
  {
    icon: Users,
    title: "Small Business First",
    description:
      "We understand small business budgets and challenges. That's why we offer enterprise-quality work at affordable prices.",
  },
];

const milestones = [
  {
    year: "2022",
    event: "Founded with a mission to make great web design accessible",
  },
  { year: "2023", event: "Crossed 50 client projects across 12 industries" },
  {
    year: "2024",
    event: "Expanded our team and launched CRM integration services",
  },
  {
    year: "2025",
    event: "150+ projects delivered with a 98% satisfaction rate",
  },
];

export default function AboutPage() {
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
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
              About Us
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We believe every small business deserves a{" "}
              <span className="text-gradient">great website</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              BrightWeb was founded on a simple idea: small businesses shouldn't
              have to choose between quality and affordability. We bring
              agency-level design and development to businesses that need it
              most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                  Our Story
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Built by people who get small business
                </h2>
                <div className="mt-6 space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                  <p>
                    We started BrightWeb because we saw a gap in the market.
                    Small business owners were stuck choosing between expensive
                    agencies that charged thousands for basic sites, or cheap
                    template builders that all looked the same.
                  </p>
                  <p>
                    We knew there had to be a better way. So we built a studio
                    that combines the craft and attention to detail of a premium
                    agency with pricing that actually makes sense for a growing
                    business.
                  </p>
                  <p>
                    Today, we've helped over 150 businesses across a wide range
                    of industries launch websites that genuinely drive results —
                    from local bakeries and fitness studios to law firms and
                    SaaS startups.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Timeline */}
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Our Journey
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

      {/* Values */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                Our Values
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                What drives us
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="h-full group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 transition-all duration-500 hover:border-[var(--color-amber)]/15">
                  <div className="mb-4 inline-flex rounded-xl bg-[var(--color-amber-glow)] p-2.5 text-[var(--color-amber)]">
                    <value.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-base font-bold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              Let's chat about your business and how we can help you build an
              online presence you're proud of.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-8 py-4 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]"
            >
              Start a Conversation
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
