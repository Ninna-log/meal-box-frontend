import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMeal } from "../services/api";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import type { Meal } from "../types";

export function MealDetail() {
  const { id }       = useParams<{ id: string }>();
  const navigate     = useNavigate();
  const [meal, setMeal]   = useState<Meal | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchMeal(Number(id))
      .then(setMeal)
      .catch((e: Error) => setError(e.message));
  }, [id]);

  if (error) return <p style={{ color: "red", padding: "32px" }}>Error: {error}</p>;
  if (!meal) return <p style={{ padding: "32px" }}>Loading…</p>;

  return (
    <main style={{ maxWidth: "760px", margin: "0 auto", padding: "32px 24px" }}>
      <Button variant="outline" onClick={() => navigate(-1)} style={{ marginBottom: "24px" }}>
        ← Back
      </Button>

      <img
        src={meal.imageUrl}
        alt={meal.name}
        style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "16px" }}
      />

      <div style={{ marginTop: "28px" }}>
        <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: 800 }}>{meal.name}</h1>
        <p style={{ color: "#6b7280", marginTop: "6px" }}>by {meal.chef.name}</p>
        <p style={{ marginTop: "4px", fontSize: "0.9rem", color: "#6b7280", fontStyle: "italic" }}>
          {meal.chef.bio}
        </p>

        <p style={{ marginTop: "20px", fontSize: "1.05rem", lineHeight: 1.7 }}>
          {meal.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
          {meal.tags.map(t => <Badge key={t.id} label={t.label} />)}
        </div>

        <div style={{
          marginTop: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px",
          background: "#f9fafb",
          borderRadius: "12px",
        }}>
          <span style={{ fontSize: "1.6rem", fontWeight: 800, color: "#16a34a" }}>
            ${meal.price.toFixed(2)}
          </span>
          <Button>Add to order</Button>
        </div>
      </div>
    </main>
  );
}
