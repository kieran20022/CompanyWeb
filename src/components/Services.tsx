import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  PenTool,
  BarChart3,
} from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: Globe,
    title: "Custom Website Design",
    description:
      "A unique, hand-crafted design that reflects your brand and sets you apart from cookie-cutter templates.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Sell products online with a secure, easy-to-manage store that integrates with your payment provider.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Built-in search engine optimization so your customers can actually find you on Google.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Every site we build looks and works perfectly on phones, tablets, and desktops.",
  },
  {
    icon: PenTool,
    title: "Brand & Logo Design",
    description:
      "Need a brand refresh? We can design a logo and visual identity that matches your new site.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Know exactly who visits your site and how they interact with it, with clear monthly reports.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Services
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed online
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              From design to launch and beyond, we handle every detail so you
              can focus on running your business.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <div className="group rounded-xl border border-gray-100 bg-white p-8 transition-all hover:border-gray-200 hover:shadow-lg">
                <div className="mb-5 inline-flex rounded-lg bg-blue-50 p-3 text-blue-600 transition-colors group-hover:bg-blue-100">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
