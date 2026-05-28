import type { BffHomeResponse, Meal } from "../types";

// In dev: Vite proxy forwards /bff, /meals, /menu, /graphql → http://localhost:3001
// In prod: VITE_API_URL points to the Railway backend
const API_BASE = import.meta.env.VITE_API_URL ?? "";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, init);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${path}`);
  return res.json() as Promise<T>;
}

export async function fetchHomeScreen(): Promise<BffHomeResponse> {
  return request<BffHomeResponse>("/bff/home");
}

export async function fetchMeal(id: number): Promise<Meal> {
  return request<Meal>(`/meals/${id}`);
}
