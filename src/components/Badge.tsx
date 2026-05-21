interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: "999px",
      fontSize: "0.72rem",
      fontWeight: 600,
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      background: "#f0fdf4",
      color: "#16a34a",
      border: "1px solid #bbf7d0",
    }}>
      {label}
    </span>
  );
}
