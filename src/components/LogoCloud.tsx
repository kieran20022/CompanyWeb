import Marquee from "./Marquee";
import FadeIn from "./FadeIn";

const logos = [
  "Maple & Co.",
  "Summit Dental",
  "Harbor Realty",
  "Pine Street Café",
  "Ironworks Gym",
  "Bloom Florals",
  "Atlas Legal",
  "Crest Plumbing",
  "Driftwood Studio",
  "Elm & Oak",
];

export default function LogoCloud() {
  return (
    <section className="border-y border-gray-100 bg-gray-50/50 py-12">
      <FadeIn>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          Trusted by businesses like yours
        </p>
      </FadeIn>
      <Marquee speed={50}>
        {logos.map((name) => (
          <span
            key={name}
            className="flex-shrink-0 text-lg font-semibold text-gray-300 select-none"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
