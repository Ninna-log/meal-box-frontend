import { useNavigate } from "react-router-dom";
import type { MealCardProps } from "../types";
import { Badge } from "./Badge";
import { Button } from "./Button";

export function MealCard({ id, name, chef, price, imageUrl, tags }: MealCardProps) {
  const navigate = useNavigate();

  return (
    <div style={{
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "transform 0.15s, box-shadow 0.15s",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1 }}>
        <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700 }}>{name}</h3>
        <p style={{ margin: 0, fontSize: "0.85rem", color: "#6b7280" }}>by {chef}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {tags.map(tag => <Badge key={tag} label={tag} />)}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
          <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#16a34a" }}>
            ${price.toFixed(2)}
          </span>
          <Button variant="outline" onClick={() => navigate(`/meals/${id}`)}>
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
