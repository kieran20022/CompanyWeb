import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import AnimatedGrid from "../components/AnimatedGrid";

const projects = [
  {
    title: "The Rustic Oven",
    category: "Restaurant",
    description:
      "A warm, inviting website for an artisan pizza restaurant. Features online menu, reservation system, and Instagram feed integration.",
    services: ["Custom Design", "Mobile-First", "CRM Integration"],
    color: "from-orange-500/10 to-red-500/10",
    result: "3x more online reservations in 2 months",
  },
  {
    title: "Summit Legal Group",
    category: "Law Firm",
    description:
      "A professional, trust-building website for a boutique law firm. Clean design with lead capture forms and client portal integration.",
    services: ["Custom Design", "SEO", "Analytics"],
    color: "from-blue-500/10 to-indigo-500/10",
    result: "Ranked on Google page 1 for 12 local keywords",
  },
  {
    title: "FitCore Studio",
    category: "Fitness",
    description:
      "A high-energy website for a CrossFit gym with class scheduling, member portal, and automated email sequences for new leads.",
    services: ["Custom Design", "CRM Integration", "E-Commerce"],
    color: "from-green-500/10 to-emerald-500/10",
    result: "45% increase in membership sign-ups",
  },
  {
    title: "Bloom & Branch",
    category: "E-Commerce",
    description:
      "A beautiful online store for a plant boutique. Features product filtering, secure checkout with Stripe, and inventory management.",
    services: ["E-Commerce", "Custom Design", "SEO"],
    color: "from-emerald-500/10 to-teal-500/10",
    result: "$28K in online sales in the first quarter",
  },
  {
    title: "Clearview Accounting",
    category: "Financial Services",
    description:
      "A clean, authoritative website for a CPA firm. Integrated with HubSpot CRM and features an interactive tax calculator tool.",
    services: ["Custom Design", "CRM Integration", "Analytics"],
    color: "from-violet-500/10 to-purple-500/10",
    result: "60% more qualified leads from the website",
  },
  {
    title: "Wanderlust Travel Co.",
    category: "Travel Agency",
    description:
      "An immersive, visually rich website for a boutique travel agency. Features destination guides, booking forms, and newsletter integration.",
    services: ["Custom Design", "SEO", "Mobile-First"],
    color: "from-cyan-500/10 to-blue-500/10",
    result: "200% increase in organic website traffic",
  },
];

export default function PortfolioPage() {
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
              Portfolio
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Websites that drive{" "}
              <span className="text-gradient">real results</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Every project tells a story. Here are some of the businesses we've
              helped establish a powerful online presence and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-500 hover:border-[var(--color-amber)]/15">
                  {/* Placeholder image area */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                      <span className="font-display text-sm font-bold text-white/60">
                        {project.title}
                      </span>
                    </div>
                    <div className="absolute right-4 top-4">
                      <span className="rounded-full bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {project.description}
                    </p>

                    {/* Result highlight */}
                    <div className="mt-4 rounded-lg bg-[var(--color-amber-glow)] px-3 py-2">
                      <p className="text-xs font-semibold text-[var(--color-amber)]">
                        {project.result}
                      </p>
                    </div>

                    {/* Service tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial strip */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <FadeIn>
            <blockquote>
              <p className="font-display text-2xl font-bold leading-relaxed tracking-tight sm:text-3xl">
                "BrightWeb turned our outdated website into a{" "}
                <span className="text-gradient">lead-generating machine</span>.
                Professional, fast, and incredibly affordable."
              </p>
              <footer className="mt-6">
                <p className="font-semibold text-[var(--color-text-primary)]">
                  Sarah Mitchell
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Founder, Summit Legal Group
                </p>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Want results like these?
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              Let's build a website that works as hard as you do. Get in touch
              for a free consultation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-8 py-4 text-sm font-bold text-[var(--color-midnight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]"
              >
                Start Your Project
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border-hover)] px-8 py-4 text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-text-muted)]"
              >
                View Services
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
