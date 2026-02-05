import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-16 text-center md:px-16 md:py-20">
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />

            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to grow your business online?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
                Get a free, no-obligation consultation. We'll review your
                current site, discuss your goals, and show you exactly what we
                can build.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
                >
                  Book Free Consultation
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
