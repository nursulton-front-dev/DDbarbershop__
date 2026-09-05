import type { CSSProperties } from "react";
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
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="shrink-0">
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
          </div>
          <p
            className="max-w-md text-sm sm:text-base"
            style={{ lineHeight: 1.65, color: "var(--text-secondary)" }}
          >
            Har bir natija mijozning uslubi, yuz shakli va istagiga qarab yaratiladi.
          </p>
        </div>

        <div
          ref={ref}
          className={`fade-up grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mt-8 sm:mt-10 ${
            visible ? "is-visible" : ""
          }`}
        >
          {portfolio.map((p, i) => (
            <figure key={p.src} className="portfolio-img-wrap">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="portfolio-img"
                style={{
                  "--portfolio-zoom": p.zoom,
                  objectPosition: p.focus,
                  transformOrigin: p.focus,
                } as CSSProperties}
              />
              <figcaption className="portfolio-caption">
                <span className="portfolio-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{p.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
