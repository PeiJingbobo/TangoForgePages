# TangoForge Pages

Official website for TangoForge, built with Astro, React, MDX, shadcn/ui-compatible components, and GitHub Pages deployment.

## Stack

- Astro for static site generation
- React for interactive UI islands and shadcn/ui components
- MDX and Astro Content Collections for docs, blog posts, and changelog entries
- Tailwind CSS for styling
- GitHub Actions for automatic GitHub Pages deployment

## Structure

- `src/pages`: route files for the homepage, docs, blog, changelog, and download page
- `src/content`: MDX collections for docs, blog, and changelog
- `src/components/ui`: shadcn/ui-compatible base components
- `src/components/site`: product-specific site components
- `src/layouts`: shared page layouts
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## GitHub Pages

The workflow builds with:

```text
SITE_URL=https://tangoforge.pei.cool
SITE_BASE=/
```

The custom domain is configured in `public/CNAME`.
