# Estúdio 747 website

Next.js 15 website for Estúdio 747 with animated marketing pages, contact form email delivery and a gated **Social Club** area where members can pay a monthly fee to receive the private WhatsApp link.

## Features

- Responsive marketing pages (`/`, `/servicos`, `/quemsomos`, `/contactos`).
- Reservation form backed by `nodemailer` (configure the `RESERVAS_*` variables).
- Credentials-based authentication powered by [NextAuth](https://authjs.dev/).
- File-based persistence for demo purposes (`data/users.json` and `data/memberships.json`).
- Stripe Checkout integration to charge the monthly Social Club subscription.
- Secure endpoint that only reveals the WhatsApp invite link to authenticated, paying members.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000> to browse the site.

### Environment variables

Copy `.env.example` to `.env.local` and fill the values:

```bash
cp .env.example .env.local
```

- `NEXTAUTH_SECRET` – random string used by NextAuth (required for login tokens).
- `NEXTAUTH_URL` – base URL used when generating absolute URLs.
- `STRIPE_SECRET_KEY` / `STRIPE_PRICE_ID` – Stripe credentials for the subscription plan.
- `NEXT_PUBLIC_STRIPE_SUCCESS_URL` / `NEXT_PUBLIC_STRIPE_CANCEL_URL` – URLs Stripe will use after checkout.
- `WHATSAPP_INVITE_URL` – private invite URL stored only on the server.
- `RESERVAS_*` – SMTP settings for the reservation form.

For local demos you can reuse the seeded user stored in `data/users.json`:

| Email | Password |
| --- | --- |
| `demo@estudio747.com` | `changeme123` |

Create new accounts via `/registar`. All user and membership data is stored in JSON so you can delete/adjust entries manually if needed.

> 💡 If you skip `NEXTAUTH_SECRET` or `NEXTAUTH_URL`, the dev server falls back to `local-dev-secret` and `http://localhost:3000` so you can still test locally, but you **must** provide real values before deploying.

### Stripe notes

The `/api/payments/create-checkout-session` route expects a recurring price ID created in your Stripe dashboard. After Stripe redirects back to `/social-club/confirm`, the app calls `/api/payments/confirm` to verify the session and mark the member as active inside `data/memberships.json`.

Because the invite link lives on `/api/social-club/invite`, it is never embedded in the public bundle, which keeps the WhatsApp group private.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server. |
| `npm run build` | Creates an optimized production build. |
| `npm run start` | Runs the production build. |
| `npm run lint` | Lints the project using Next.js defaults. |
| `npm run test:performance` | Builds the app and runs Lighthouse CI. |

## Folder structure highlights

- `src/app` – Next.js App Router with marketing pages, authentication routes and Social Club flows.
- `src/lib` – helper modules for Auth, Stripe-friendly persistence and JSON utilities.
- `src/components` – shared UI such as the navbar, footer and React providers.
- `data/` – JSON files that emulate a database for users and memberships.

Feel free to replace the JSON stores with a real database (Prisma, Supabase, etc.) when moving this prototype to production.
