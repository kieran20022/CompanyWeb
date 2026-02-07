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

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Custom Website Design",
    description:
      "Hand-crafted designs built from scratch that capture your brand identity and convert visitors into customers.",
  },
  {
    icon: ShoppingCart,
    number: "02",
    title: "E-Commerce Solutions",
    description:
      "Secure online stores with seamless checkout flows, inventory management, and payment integrations.",
  },
  {
    icon: Search,
    number: "03",
    title: "SEO Optimization",
    description:
      "Built-in search engine optimization so your ideal customers find you first on Google.",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Mobile-First Design",
    description:
      "Responsive sites that look stunning and perform flawlessly on every screen size.",
  },
  {
    icon: LinkIcon,
    number: "05",
    title: "CRM & Integrations",
    description:
      "Connect your site to HubSpot, Salesforce, booking tools, email marketing — all working together.",
  },
  {
    icon: BarChart3,
    number: "06",
    title: "Analytics & Reporting",
    description:
      "Track visitor behavior and measure results with clear, actionable monthly reports.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="noise-bg relative bg-[var(--color-surface)] py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left heading — sticky on desktop */}
          <div className="lg:col-span-4">
            <FadeIn>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)]">
                What We Do
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Everything you need to{" "}
                <span className="text-gradient">succeed online</span>
              </h2>
              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
                From design to launch and beyond — we handle every detail so you
                can focus on running your business.
              </p>
              <Link
                to="/services"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-amber)] transition-colors hover:text-[var(--color-amber-light)]"
              >
                Explore all services
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </FadeIn>
          </div>

          {/* Right grid */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, i) => (
                <FadeIn key={service.title} delay={i * 0.06}>
                  <div className="h-full group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 transition-all duration-500 hover:border-[var(--color-amber)]/20 hover:bg-[var(--color-surface-hover)]">
                    {/* Number watermark */}
                    <span className="pointer-events-none absolute -right-2 -top-4 font-display text-[80px] font-800 leading-none text-white/[0.02] transition-all duration-500 group-hover:text-[var(--color-amber)]/[0.06]">
                      {service.number}
                    </span>

                    <div className="relative z-10">
                      <div className="mb-4 inline-flex rounded-xl bg-[var(--color-amber-glow)] p-2.5 text-[var(--color-amber)] transition-all duration-300 group-hover:bg-[var(--color-amber)]/20">
                        <service.icon size={20} strokeWidth={1.5} />
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
