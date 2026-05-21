import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function Button({ variant = "primary", children, style, ...rest }: ButtonProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 22px",
    borderRadius: "8px",
    fontSize: "0.95rem",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    transition: "opacity 0.15s",
    ...style,
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: { background: "#16a34a", color: "#fff" },
    outline: { background: "transparent", color: "#16a34a", border: "2px solid #16a34a" },
  };

  return (
    <button style={{ ...base, ...variants[variant] }} {...rest}>
      {children}
    </button>
  );
}
