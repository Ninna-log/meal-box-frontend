import type { BffHomeResponse, Meal } from "../types";

// Vite proxy (vite.config.ts) forwards /bff, /meals, /menu, /graphql → http://localhost:3001

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, init);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${path}`);
  return res.json() as Promise<T>;
}

export async function fetchHomeScreen(): Promise<BffHomeResponse> {
  return request<BffHomeResponse>("/bff/home");
}

export async function fetchMeal(id: number): Promise<Meal> {
  return request<Meal>(`/meals/${id}`);
}
