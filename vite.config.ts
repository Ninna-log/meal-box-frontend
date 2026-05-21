import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/meals": "http://localhost:3001",
      "/menu":  "http://localhost:3001",
      "/bff":   "http://localhost:3001",
      "/graphql": "http://localhost:3001",
    },
  },
});
