import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "../lib/site-data";

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      className="relative"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="brass-line" style={{ height: 1 }} />
      <div className="max-w-content container-px" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.18em]" style={{ color: "var(--brass)" }}>
            FAQ
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
            Ko'p so'raladigan savollar
          </h2>
        </div>

        <div className="mt-12 max-w-3xl">
          {faq.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <div
                key={item.question}
                style={{ borderBottom: "1px solid rgba(181, 164, 106, 0.22)" }}
              >
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 text-left py-5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span
                      className="font-serif-display"
                      style={{ fontSize: "1.15rem", fontWeight: 500 }}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      strokeWidth={1.5}
                      style={{
                        color: "var(--brass)",
                        transition: "transform 200ms ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        flexShrink: 0,
                      }}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  style={{
                    paddingBottom: 20,
                    color: "var(--text-secondary)",
                    fontSize: "0.975rem",
                    lineHeight: 1.65,
                    maxWidth: 640,
                  }}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
