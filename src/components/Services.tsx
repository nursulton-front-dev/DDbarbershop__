import { services } from "../lib/site-data";
import { useReveal } from "../hooks/useReveal";

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="xizmatlar"
      className="relative"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="brass-line" style={{ height: 1 }} />
      <div className="max-w-content container-px" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.18em]" style={{ color: "var(--brass)" }}>
            NARXLAR
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
            Xizmatlar va narxlar
          </h2>
          <p
            className="mt-5"
            style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--text-secondary)" }}
          >
            Asosiy xizmatlar narxi. Yakuniy narx tanlangan xizmat va ish hajmiga qarab aniqlanadi.
          </p>
        </div>

        <div
          ref={ref}
          className={`fade-up mt-12 ${visible ? "is-visible" : ""}`}
        >
          {services.map((s) => (
            <div
              key={s.number}
              className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[80px_1fr_auto] gap-3 md:gap-6 items-start md:items-center py-6 md:py-7"
              style={{ borderBottom: "1px solid rgba(181, 164, 106, 0.22)" }}
            >
              <span
                className="font-serif-display"
                style={{
                  fontSize: "0.95rem",
                  color: "var(--brass)",
                  letterSpacing: "0.08em",
                }}
              >
                {s.number}
              </span>

              <div>
                <h3
                  className="font-serif-display"
                  style={{
                    fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-1.5"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                    color: "var(--text-secondary)",
                  }}
                >
                  {s.description}
                </p>
              </div>

              <span
                className="font-serif-display text-right"
                style={{
                  fontSize: "clamp(1.2rem, 2.4vw, 1.6rem)",
                  color: "var(--brass-light)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {s.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
