import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { footer, site } from "../lib/site-data";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer
      id="aloqa"
      className="relative"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      <div className="brass-line" style={{ height: 1 }} />
      <div className="max-w-content container-px" style={{ paddingTop: 64, paddingBottom: 56 }}>
        {/* Final CTA */}
        <div className="max-w-3xl">
          <h2
            className="font-serif-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              fontWeight: 500,
              lineHeight: 1.08,
              color: "var(--text-primary)",
            }}
          >
            {footer.title}
          </h2>
          <p
            className="mt-5"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
            }}
          >
            {footer.subtitle}
          </p>

          <a
            href={footer.ctaHref}
            className="btn-brass mt-8"
            aria-label={footer.ctaLabel}
          >
            <Phone size={16} strokeWidth={1.5} />
            {footer.ctaLabel}
          </a>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          <ContactItem icon={<MapPin size={18} strokeWidth={1.5} />} label="Manzil">
            {site.address}
          </ContactItem>
          <ContactItem icon={<Clock size={18} strokeWidth={1.5} />} label="Ish vaqti">
            {site.hours}
          </ContactItem>
          <ContactItem
            icon={<Instagram size={18} strokeWidth={1.5} />}
            label="Instagram"
          >
            <a
              href={site.social.instagram.href}
              style={{ color: "var(--text-primary)" }}
            >
              {site.social.instagram.label}
            </a>
          </ContactItem>
        </div>

        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderTop: "1px solid rgba(181, 164, 106, 0.2)" }}
        >
          <a
            href="#bosh"
            aria-label={`${site.brand} bosh sahifa`}
            className="brand-lockup inline-flex items-center gap-3 self-start"
          >
            <BrandLogo height={56} alt="" />
            <span
              className="font-serif-display"
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-primary)",
                letterSpacing: "0.01em",
              }}
            >
              {site.brand}
            </span>
          </a>
          <p
            className="text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            {footer.copyright}
          </p>
          <a
            href={site.phone.href}
            className="text-sm"
            style={{ color: "var(--brass-light)" }}
          >
            {site.phone.label}
          </a>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <span style={{ color: "var(--brass)" }}>{icon}</span>
        <p
          className="text-xs tracking-[0.14em]"
          style={{ color: "var(--text-secondary)" }}
        >
          {label.toUpperCase()}
        </p>
      </div>
      <p
        className="mt-3"
        style={{ fontSize: "0.95rem", lineHeight: 1.55, color: "var(--text-primary)" }}
      >
        {children}
      </p>
    </div>
  );
}
