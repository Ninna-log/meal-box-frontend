# MealBox — Frontend

React 18 + TypeScript SPA powered by a Server-Driven UI — layout and content are fully controlled by the backend BFF response.

---

## Prerequisites

- Node.js 20+
- The [MealBox backend](https://github.com/Ninna-log/meal-box-backend) running on `http://localhost:3001`

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
# → http://localhost:5173
```

> The Vite dev server proxies all API calls (`/bff`, `/meals`, `/menu`, `/graphql`) to `http://localhost:3001`. No CORS configuration needed.

---

## Available scripts

| Script              | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start Vite dev server with HMR     |
| `npm run build`     | Type-check + bundle for production |
| `npm run preview`   | Preview the production build       |
| `npm run typecheck` | Type-check without building        |

---

## Project structure

```
frontend/
├── index.html
├── vite.config.ts          # Vite + proxy config
├── tsconfig.json
└── src/
    ├── main.tsx             # createRoot entry point
    ├── App.tsx              # BrowserRouter + nav shell
    ├── types/
    │   └── index.ts         # Shared interfaces + SduiComponent union
    ├── services/
    │   └── api.ts           # fetchHomeScreen, fetchMeal
    ├── components/
    │   ├── Badge.tsx        # Pill-shaped tag
    │   ├── Button.tsx       # Primary / outline variants
    │   ├── HeroBanner.tsx   # Full-width gradient banner
    │   └── MealCard.tsx     # Meal card with image, tags, price
    └── pages/
        ├── Home.tsx         # SDUI-driven home page
        └── MealDetail.tsx   # /meals/:id detail view
```

---

## Pages

| Route        | Page         | Description                                      |
| ------------ | ------------ | ------------------------------------------------ |
| `/`          | `Home`       | Fetches `/bff/home` and renders the SDUI tree    |
| `/meals/:id` | `MealDetail` | Fetches `/meals/:id` and shows full meal details |

---

## How SDUI works

The `Home` page fetches `/bff/home` and receives a component tree:

```json
{
  "screen": "home",
  "components": [
    { "type": "HeroBanner", "props": { "title": "This Week's Menu", "subtitle": "..." } },
    { "type": "MealCard", "props": { "id": 1, "name": "Pasta al Limone", ... } }
  ]
}
```

The frontend maps each `type` to its React component — it never decides what to show or in what order. Layout changes on the server are reflected instantly without a frontend deploy.
