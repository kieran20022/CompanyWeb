import { Star } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Bloom Florals",
    quote:
      "BrightWeb completely transformed our online presence. We went from a dated template to a gorgeous site that actually brings in customers. Best investment we've made.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Founder, Summit Dental",
    quote:
      "The process was effortless. They understood our brand right away and delivered a site that our patients love. New appointment bookings are up 40% since launch.",
    rating: 5,
  },
  {
    name: "Linda Chen",
    role: "Manager, Pine Street Café",
    quote:
      "We were nervous about the cost, but it paid for itself in the first month. The site looks incredible and our online orders have tripled.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hear from our customers
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Real results from real business owners.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="flex-1 text-gray-600 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-6 border-t border-gray-100 pt-6">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
