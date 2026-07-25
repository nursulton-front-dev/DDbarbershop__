import { BadgeCheck, UserRound, Award, Armchair, type LucideIcon } from "lucide-react";
import { advantages } from "../lib/site-data";
import { useReveal } from "../hooks/useReveal";

const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  UserRound,
  Award,
  Armchair,
};

export default function WhyUs() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      className="relative"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      <div
        className="brass-line"
        style={{ height: 1 }}
      />
      <div className="max-w-content container-px" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.18em]" style={{ color: "var(--brass)" }}>
            NIMA UCHUN AYNAN BIZ
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
            Nima uchun aynan biz
          </h2>
          <p
            className="mt-5"
            style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--text-secondary)" }}
          >
            Sifat faqat yakuniy natijada emas, butun xizmat jarayonida seziladi.
          </p>
        </div>

        <div
          ref={ref}
          className={`fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 ${
            visible ? "is-visible" : ""
          }`}
        >
          {advantages.map((a) => {
            const Icon = icons[a.icon];
            return (
              <div
                key={a.title}
                className="flex flex-col"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  borderRadius: 6,
                  borderTop: "1px solid var(--brass)",
                  padding: "28px 28px 30px",
                }}
              >
                <Icon size={26} strokeWidth={1.5} style={{ color: "var(--brass)" }} />
                <h3
                  className="font-serif-display mt-5"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  {a.title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                  }}
                >
                  {a.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
