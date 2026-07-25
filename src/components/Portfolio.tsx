import { portfolio } from "../lib/site-data";
import { useReveal } from "../hooks/useReveal";

export default function Portfolio() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="portfolio"
      className="relative"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      <div className="brass-line" style={{ height: 1 }} />
      <div className="max-w-content container-px" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.18em]" style={{ color: "var(--brass)" }}>
            PORTFOLIO
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
            Ishlarimiz
          </h2>
          <p
            className="mt-5"
            style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--text-secondary)" }}
          >
            Har bir natija mijozning uslubi, yuz shakli va istagiga qarab yaratiladi.
          </p>
        </div>

        <div
          ref={ref}
          className={`fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 ${
            visible ? "is-visible" : ""
          }`}
          style={{ gridAutoRows: "minmax(160px, auto)" }}
        >
          {portfolio.map((p, i) => {
            const spanClass = spanFor(p.span, i);
            return (
              <div key={i} className={`portfolio-img-wrap ${spanClass}`}>
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="portfolio-img"
                  style={{ display: "block" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function spanFor(span: string, i: number) {
  // Desktop editorial grid: alternate tall / wide spans
  if (span === "tall") return "lg:row-span-2";
  if (span === "wide") return "lg:col-span-2";
  return "";
}
