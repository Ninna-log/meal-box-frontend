export interface Chef {
  id: number;
  name: string;
  bio: string;
}

export interface MealTag {
  id: number;
  label: string;
}

export interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  chef: Chef;
  tags: MealTag[];
}

// ── SDUI types ────────────────────────────────────────────

export interface HeroBannerProps {
  title: string;
  subtitle: string;
}

export interface MealCardProps {
  id: number;
  name: string;
  chef: string;
  price: number;
  imageUrl: string;
  tags: string[];
}

export type SduiComponent =
  | { type: "HeroBanner"; props: HeroBannerProps }
  | { type: "MealCard"; props: MealCardProps };

export interface BffHomeResponse {
  screen: string;
  components: SduiComponent[];
}
