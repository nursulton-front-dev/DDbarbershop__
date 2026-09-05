import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "../lib/site-data";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(20, 38, 31, 0.92)"
          : "rgba(20, 38, 31, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(181, 164, 106, 0.25)"
          : "1px solid rgba(181, 164, 106, 0)",
      }}
    >
      <div className="max-w-content container-px">
        <div
          className="flex items-center justify-between"
          style={{ height: 64 }}
        >
          {/* Brand logo */}
          <a
            href="#bosh"
            aria-label={`${site.brand} bosh sahifa`}
            className="brand-lockup block shrink-0"
          >
            <BrandLogo alt={site.brand} />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={site.phone.href}
              className="btn-brass"
              style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}
              aria-label={`Qo'ng'iroq qilish: ${site.phone.label}`}
            >
              <Phone size={15} strokeWidth={1.5} />
              <span className="hidden sm:inline">Qo'ng'iroq qilish</span>
              <span className="sm:hidden">Qo'ng'iroq</span>
            </a>

            <button
              type="button"
              className="md:hidden"
              aria-label="Menyuni ochish"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              style={{ color: "var(--text-primary)" }}
            >
              {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden"
          style={{
            backgroundColor: "rgba(15, 32, 26, 0.98)",
            backdropFilter: "blur(10px)",
            borderTop: "1px solid rgba(181, 164, 106, 0.2)",
          }}
        >
          <nav className="container-px max-w-content flex flex-col py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base"
                style={{
                  color: "var(--text-primary)",
                  borderBottom: "1px solid rgba(181, 164, 106, 0.15)",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
