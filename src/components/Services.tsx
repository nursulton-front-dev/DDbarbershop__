import { pricing } from "../lib/site-data";
import type { PriceGroup } from "../lib/site-data";
import { formatPrice } from "../lib/format";
import { useReveal } from "../hooks/useReveal";

export default function Services() {
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
            {pricing.eyebrow}
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
            {pricing.title}
          </h2>
          <p
            className="mt-5"
            style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--text-secondary)" }}
          >
            {pricing.subtitle}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-14 md:gap-16">
          {pricing.groups.map((group) => (
            <PriceList key={group.master} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceList({ group }: { group: PriceGroup }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`fade-up ${visible ? "is-visible" : ""}`}>
      <div className="flex flex-wrap items-center gap-3">
        <h3
          className="font-serif-display"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
            fontWeight: 500,
            lineHeight: 1.15,
            color: "var(--text-primary)",
          }}
        >
          {group.master}
        </h3>
        {group.badge && <span className="vip-badge">{group.badge}</span>}
      </div>

      <div className="mt-6">
        {group.items.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-[1fr_auto] gap-4 md:gap-6 items-baseline py-5 md:py-6"
            style={{ borderBottom: "1px solid rgba(181, 164, 106, 0.22)" }}
          >
            <h4
              className="font-serif-display"
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
                fontWeight: 500,
                color: "var(--text-primary)",
                lineHeight: 1.25,
              }}
            >
              {item.title}
            </h4>

            <span
              className="font-serif-display text-right"
              style={{
                fontSize: "clamp(1.05rem, 2.2vw, 1.45rem)",
                color: "var(--brass-light)",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              {formatPrice(item.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
