# Portfolio

My super ultra mega cool personal website.

## Tech Stack

- [Astro 7](https://astro.build/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
- Markdown and Astro content collections
- GitHub Pages and GitHub Actions

## Routes

| Route | Content |
| --- | --- |
| `/` | Introduction and primary links. |
| `/proyectos` | Personal and experimental projects. |
| `/experiencia` | Professional experience and delivered solutions. |
| `/experiencia/[...slug]` | Individual case study details. |
| `/contacto` | Contact options, GitHub, and LinkedIn. |
| `/en/` | English introduction and primary links. |
| `/en/projects` | English personal and experimental projects. |
| `/en/experience` | English professional experience and delivered solutions. |
| `/en/experience/[...slug]` | English individual case study details. |
| `/en/contact` | English contact options, GitHub, and LinkedIn. |

## Structure

```text
src/
├── components/       # Shared components
├── content/casos/    # Markdown case studies
├── layouts/          # Global site structure
├── pages/            # Astro routes
├── styles/           # Everforest tokens and global styles
└── content.config.ts # Case study collection schema
public/               # Favicons and static assets
```

Each Markdown file in `src/content/casos/` includes the case study title, description, role, sector, and technologies. Client names and identifying data are omitted for confidentiality.

## Local Development

Requires Node.js `>=22.12.0` and pnpm.

```sh
pnpm install
pnpm dev
```

The site will be available at `http://localhost:4321`.

## Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts the development server. |
| `pnpm build` | Generates the static site in `dist/`. |
| `pnpm preview` | Serves the compiled site locally. |
| `pnpm astro ...` | Runs Astro CLI commands. |

## Deployment

The [Deploy site to GitHub Pages](.github/workflows/deploy-pages.yml) workflow builds and publishes the site automatically when changes are pushed to the `main` branch.

Before configuring a custom domain, update the `site` property in `astro.config.mjs` to generate correct canonical URLs and sitemap entries.
