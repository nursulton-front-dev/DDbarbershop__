import { Star } from "lucide-react";
import { testimonials } from "../lib/site-data";
import { useReveal } from "../hooks/useReveal";

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      className="relative"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      <div className="brass-line" style={{ height: 1 }} />
      <div className="max-w-content container-px" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.18em]" style={{ color: "var(--brass)" }}>
            MIJOZLAR FIKRI
          </p>
          <h2
            className="font-serif-display mt-4"
            style={{
              fontSize: "clamp(2rem, 4.6vw, 3.2rem)",
              fontWeight: 500,
              lineHeight: 1.08,
              color: "var(--text-primary)",
            }}
          >
            Mijozlar fikri
          </h2>
        </div>

        <div
          ref={ref}
          className={`fade-up grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12 ${
            visible ? "is-visible" : ""
          }`}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={t.featured ? "lg:col-span-6" : "lg:col-span-3"}
              style={{
                borderTop: "1px solid var(--brass)",
                paddingTop: 24,
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    strokeWidth={1.5}
                    style={{ color: "var(--brass)" }}
                    fill="var(--brass)"
                  />
                ))}
              </div>
              <p
                className="font-serif-display"
                style={{
                  fontSize: t.featured ? "clamp(1.3rem, 2.2vw, 1.7rem)" : "1.0625rem",
                  lineHeight: 1.45,
                  color: "var(--text-primary)",
                  fontWeight: 500,
                }}
              >
                "{t.text}"
              </p>
              <p
                className="mt-5 text-sm"
                style={{ color: "var(--brass-light)", letterSpacing: "0.04em" }}
              >
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
