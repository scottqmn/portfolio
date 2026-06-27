# portfolio

Personal portfolio site — a static-export [Next.js](https://nextjs.org/) app
(App Router, React 19, Tailwind v4), deployed to [Cloudflare Pages](https://pages.cloudflare.com/).

## Getting started

Requires Node 26 (see `.nvmrc`) and [pnpm](https://pnpm.io/).

```bash
nvm use          # Node 26
pnpm install
pnpm dev         # http://localhost:3000
```

Edit `src/app/page.tsx` to change the page; it auto-updates as you save.

## Scripts

| Command          | Description                |
| ---------------- | -------------------------- |
| `pnpm dev`       | Start the dev server       |
| `pnpm build`     | Static export to `out/`    |
| `pnpm preview`   | Serve the built `out/`     |
| `pnpm lint`      | ESLint                     |
| `pnpm typecheck` | `tsc --noEmit`             |
| `pnpm format`    | Prettier write             |
| `pnpm clean`     | Remove `.next/` and `out/` |

## Deploy (Cloudflare Pages)

The site builds to a fully static `out/` directory (`next.config.mjs` →
`output: 'export'`) and is served by Cloudflare Pages, configured in `wrangler.toml`
(`pages_build_output_dir = "out"`).

- **Build command:** `pnpm build`
- **Output directory:** `out`

Cloudflare's Git integration builds and deploys on push to `main`. To deploy a local
build manually:

```bash
pnpm build
pnpm dlx wrangler pages deploy out
```
