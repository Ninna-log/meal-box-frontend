import type { HeroBannerProps } from "../types";

export function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <div style={{
      background: "linear-gradient(135deg, #14532d 0%, #16a34a 100%)",
      color: "#fff",
      padding: "56px 32px",
      borderRadius: "16px",
      marginBottom: "32px",
      textAlign: "center",
    }}>
      <h1 style={{ margin: 0, fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ marginTop: "12px", fontSize: "1.1rem", opacity: 0.85 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
