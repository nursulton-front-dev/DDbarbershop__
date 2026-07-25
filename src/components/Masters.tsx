import { Phone } from "lucide-react";
import { masters } from "../lib/site-data";
import { useReveal } from "../hooks/useReveal";

export default function Masters() {
  return (
    <section
      id="ustalar"
      className="relative"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="max-w-content container-px" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="max-w-2xl">
          <h2
            className="font-serif-display"
            style={{
              fontSize: "clamp(2rem, 4.6vw, 3.2rem)",
              fontWeight: 500,
              lineHeight: 1.08,
              color: "var(--text-primary)",
            }}
          >
            Ustalar
          </h2>
        </div>

        <div className="mt-12 lg:mt-16 flex flex-col gap-16 lg:gap-24">
          {masters.map((m, i) => (
            <MasterProfile key={m.name} master={m} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MasterProfile({
  master,
  reversed,
}: {
  master: (typeof masters)[number];
  reversed: boolean;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`fade-up grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        visible ? "is-visible" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`lg:col-span-6 ${reversed ? "lg:order-2" : "lg:order-1"}`}
      >
        <div
          className="overflow-hidden"
          style={{ borderRadius: 6, aspectRatio: "4 / 5" }}
        >
          <img
            src={master.image}
            alt={master.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover"
            style={{ display: "block" }}
          />
        </div>
      </div>

      {/* Text */}
      <div className={`lg:col-span-6 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
        <p
          className="text-xs tracking-[0.16em]"
          style={{ color: "var(--text-secondary)" }}
        >
          {master.role}
        </p>
        <h3
          className="font-serif-display mt-3"
          style={{
            fontSize: "clamp(2rem, 4.4vw, 3rem)",
            fontWeight: 500,
            lineHeight: 1.05,
            color: "var(--text-primary)",
          }}
        >
          {master.name}
        </h3>
        <p
          className="mt-3 text-sm"
          style={{ color: "var(--brass)", letterSpacing: "0.02em" }}
        >
          {master.experience}
        </p>

        <div
          className="mt-6 brass-line"
          style={{ height: 1, width: 56 }}
        />

        <p
          className="mt-6 font-serif-display"
          style={{
            fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
            lineHeight: 1.35,
            color: "var(--text-primary)",
            fontWeight: 500,
          }}
        >
          {master.shortLine}
        </p>

        <p
          className="mt-5"
          style={{
            fontSize: "0.975rem",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            maxWidth: 520,
          }}
        >
          {master.bio}
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {master.specialties.map((s) => (
            <span key={s} className="specialty-chip">
              {s}
            </span>
          ))}
        </div>

        <a
          href={master.phone.href}
          className="btn-brass mt-8"
          style={{ fontSize: "0.875rem" }}
          aria-label={`${master.name} bilan bog'lanish: ${master.phone.label}`}
        >
          <Phone size={15} strokeWidth={1.5} />
          {master.phone.label}
        </a>
      </div>
    </div>
  );
}


