import { useEffect, useState } from "react";
import { fetchHomeScreen } from "../services/api";
import { HeroBanner } from "../components/HeroBanner";
import { MealCard } from "../components/MealCard";
import type { BffHomeResponse } from "../types";

export function Home() {
  const [screen, setScreen] = useState<BffHomeResponse | null>(null);
  const [error, setError]   = useState<string | null>(null);

  useEffect(() => {
    fetchHomeScreen()
      .then(setScreen)
      .catch((e: Error) => setError(e.message));
  }, []);

  if (error) return <p style={{ color: "red", padding: "32px" }}>Error: {error}</p>;
  if (!screen) return <p style={{ padding: "32px" }}>Loading…</p>;

  const heroes   = screen.components.filter(c => c.type === "HeroBanner");
  const mealCards = screen.components.filter(c => c.type === "MealCard");

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px" }}>
      {heroes.map((c, i) =>
        c.type === "HeroBanner" ? <HeroBanner key={i} {...c.props} /> : null
      )}

      <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "24px" }}>
        This Week's Menu
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "24px",
      }}>
        {mealCards.map((c) =>
          c.type === "MealCard" ? <MealCard key={c.props.id} {...c.props} /> : null
        )}
      </div>
    </main>
  );
}
