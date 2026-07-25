import { Phone, ArrowRight } from "lucide-react";
import { hero, trust, site } from "../lib/site-data";
import { Star } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="bosh"
      className="relative"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      <div className="max-w-content container-px">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
          style={{ minHeight: "clamp(560px, 86vh, 820px)", paddingTop: 120 }}
        >
          {/* Text block */}
          <div
            ref={ref}
            className={`fade-up lg:col-span-7 ${visible ? "is-visible" : ""}`}
          >
            <p
              className="text-xs tracking-[0.18em]"
              style={{ color: "var(--brass)" }}
            >
              {hero.eyebrow}
            </p>

            <h1
              className="font-serif-display mt-6"
              style={{
                fontSize: "clamp(2.6rem, 7vw, 5.2rem)",
                lineHeight: 1.04,
                fontWeight: 500,
                color: "var(--text-primary)",
              }}
            >
              {hero.titleTop}
              <br />
              {hero.titleBottom}
            </h1>

            <p
              className="mt-5 font-serif-display"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                color: "var(--brass-light)",
                letterSpacing: "0.02em",
              }}
            >
              {hero.brand}
            </p>

            <p
              className="mt-6 max-w-xl"
              style={{
                fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
                lineHeight: 1.6,
                color: "var(--text-secondary)",
              }}
            >
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href={hero.ctaHref} className="btn-brass" aria-label={hero.ctaLabel}>
                <Phone size={16} strokeWidth={1.5} />
                {hero.ctaLabel}
              </a>
              <a
                href={hero.secondaryLink.href}
                className="inline-flex items-center gap-2 text-sm transition-colors"
                style={{ color: "var(--text-primary)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--brass-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
              >
                {hero.secondaryLink.label}
                <ArrowRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Image block */}
          <div className="lg:col-span-5">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: 6, aspectRatio: "4 / 5" }}
            >
              <img
                src={hero.image}
                alt={hero.imageAlt}
                fetchPriority="high"
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "rgba(20, 38, 31, 0.28)",
                  mixBlendMode: "multiply",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,38,31,0.1) 0%, rgba(20,38,31,0.45) 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <TrustBar />
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div
      className="grid grid-cols-3 gap-4 md:gap-0"
      style={{
        paddingTop: 40,
        paddingBottom: 56,
        marginTop: 16,
        borderTop: "1px solid rgba(181, 164, 106, 0.25)",
      }}
    >
      {trust.map((item, i) => (
        <div
          key={item.label}
          className="flex flex-col items-center text-center md:px-6"
          style={{
            borderLeft:
              i !== 0 ? "1px solid rgba(181, 164, 106, 0.2)" : undefined,
          }}
        >
          <div
            className="font-serif-display"
            style={{
              fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
              color: "var(--brass-light)",
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            {item.value}
          </div>
          <div
            className="mt-2 flex items-center gap-1.5 text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            {item.label.includes("baho") && (
              <Star size={13} strokeWidth={1.5} style={{ color: "var(--brass)" }} fill="var(--brass)" />
            )}
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
