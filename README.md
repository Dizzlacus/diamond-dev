# Diamond Dev

Marketing site for [diamond-dev.co.uk](https://diamond-dev.co.uk), built with [Astro](https://astro.build) and Tailwind CSS.

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Deploy

Cloudflare Workers Builds (connect the GitHub repo in the dashboard):

| Field | Value |
| --- | --- |
| Build command | `pnpm run build` |
| Deploy command | `npx wrangler deploy` |

Locally:

```bash
pnpm deploy
```
