# Mini Capstone Storefront

A React storefront for an e-commerce API: browse a product catalogue, view details in a modal,
manage a cart, and check out. Admin users can create, edit, and delete products.

**Live site:** [frontend-mini-capstone.onrender.com](https://frontend-mini-capstone.onrender.com/photos)
· **API:** [mini-capstone-api-lv9j.onrender.com](https://mini-capstone-api-lv9j.onrender.com/products.json)
([API repo](https://github.com/mkanwal-iit/mini-capstone-api))

> The API behind this runs on Render's free tier, which sleeps after 15 minutes of inactivity.
> The first page load after a sleep can take ~30 seconds while the container wakes.

---

## Features

- **Catalogue** — product grid with image galleries, served from the Rails API
- **Product detail** — modal view with full description, supplier, and pricing
- **Cart** — add and remove items, persisted server-side against the signed-in user
- **Checkout** — converts the cart into an order with subtotal, tax, and total
- **Authentication** — signup, login, and logout against session cookies
- **Admin** — product creation and editing, shown only to admin users

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | React |
| Build tool | Vite |
| Routing | React Router |
| HTTP | Axios |
| Styling | Bootstrap |
| Hosting | Render (static site) |

---

## Getting Started

### Prerequisites
- Node.js 18 or newer
- The [API](https://github.com/mkanwal-iit/mini-capstone-api) running locally on port 3000,
  or a deployed instance

### Setup

```bash
git clone https://github.com/mkanwal-iit/frontend-mini-capstone.git
cd frontend-mini-capstone

npm install
npm run dev        # http://localhost:5173
```

With no configuration, the app talks to `http://localhost:3000`. To point it at a deployed API,
create a `.env` file:

```
VITE_API_URL=https://mini-capstone-api-lv9j.onrender.com
```

---

## Configuration

| Variable | Purpose | Default |
| --- | --- | --- |
| `VITE_API_URL` | Base URL of the Rails API | `http://localhost:3000` |

The API host was previously hardcoded in `src/App.jsx`. When the deployed API's hostname changed,
every request failed with a network error and fixing it meant editing, committing, and
redeploying code. Reading it from the environment makes that a settings change instead.

Note that Vite inlines `VITE_*` variables at **build** time, not at runtime — changing the value
requires a rebuild, and anything prefixed `VITE_` is visible to anyone who views the bundle, so it
must never hold a secret.

---

## Deployment

Deployed to [Render](https://render.com) as a static site. Pushes to `main` trigger an automatic
rebuild.

| Setting | Value |
| --- | --- |
| Build command | `npm install && npm run build` |
| Publish directory | `dist` |
| Rewrite rule | `/*` → `/index.html` (Rewrite) |

The rewrite rule is what allows client-side routes such as `/photos` to be opened directly or
refreshed. Without it the host looks for a file at that path, finds none, and returns a 404 before
the router ever loads.
