import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  Link,
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
    icon: Link,
    title: "CRM & Integrations",
    description:
      "Connect your website to CRMs like HubSpot or Salesforce, email marketing tools, booking systems, and more — so everything works together.",
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
    <section id="services" className="bg-white py-20 dark:bg-gray-950 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Services
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to succeed online
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              From design to launch and beyond — including CRM connections,
              third-party integrations, and ongoing support — we handle every
              detail so you can focus on running your business.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-rows-[auto] gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08} className="flex">
              <div className="group flex flex-1 flex-col rounded-xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900 dark:hover:shadow-blue-500/5">
                <div className="mb-5 inline-flex self-start rounded-lg bg-blue-50 p-3 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-gray-500 dark:text-gray-400">
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
