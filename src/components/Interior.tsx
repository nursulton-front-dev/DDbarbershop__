import { interior } from "../lib/site-data";
import { useReveal } from "../hooks/useReveal";

export default function Interior() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      className="relative"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="brass-line" style={{ height: 1 }} />
      <div className="max-w-content container-px" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.18em]" style={{ color: "var(--brass)" }}>
              INTERYER
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
              {interior.title}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
              }}
            >
              {interior.text}
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className={`fade-up grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 ${
            visible ? "is-visible" : ""
          }`}
        >
          {/* Large image */}
          <div
            className="lg:col-span-2 overflow-hidden"
            style={{ borderRadius: 6, aspectRatio: "16 / 10" }}
          >
            <img
              src={interior.images[0].src}
              alt={interior.images[0].alt}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            />
          </div>
          {/* Two smaller stacked */}
          <div className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {interior.images.slice(1).map((img) => (
              <div
                key={img.alt}
                className="overflow-hidden"
                style={{ borderRadius: 6, aspectRatio: "4 / 3" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
