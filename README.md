# Cook

A recipes site where every recipe is just a markdown file. Built with [Astro](https://astro.build), deployed to GitHub Pages.

Live at: https://mkazinauskas.github.io/cook/

## Adding a recipe

Create a new `.md` file in [`src/content/recipes/`](src/content/recipes/). The filename becomes the URL slug (e.g. `my-recipe.md` → `/recipes/my-recipe/`).

```markdown
---
title: My Recipe
description: A one-line summary shown on the homepage.
tags: [dinner, quick]
prepTime: 10 min
cookTime: 20 min
servings: 4
date: 2026-08-25
---

## Ingredients

- 1 thing
- 2 other things

## Instructions

1. Do this.
2. Do that.
```

Frontmatter fields:

| Field         | Required | Notes                                          |
| ------------- | -------- | ----------------------------------------------- |
| `title`       | yes      |                                                  |
| `description` | no       | Shown on the recipe card and as page meta text |
| `tags`        | no       | Powers the tag filter on the homepage           |
| `prepTime`    | no       | Free text, e.g. `10 min`                        |
| `cookTime`    | no       | Free text                                       |
| `servings`    | no       | Whole number, e.g. `4`. Powers a servings slider that scales ingredient quantities |
| `image`       | no       | Path or URL to a hero image                     |
| `date`        | no       | Used to sort recipes, newest first              |

Everything below the frontmatter is regular markdown and becomes the recipe body — headings, lists, whatever you need.

That's it — commit and push to `main`, and the site rebuilds and redeploys automatically.

## Local development

```sh
npm install
npm run dev
```

Requires Node 22.12+ (Astro will refuse to run on older Node 22.x patch versions).

| Command                    | Action                                       |
| -------------------------- | --------------------------------------------- |
| `npm run dev`              | Start the local dev server                    |
| `npm run build`            | Build the static site to `./dist/`            |
| `npm run preview`          | Preview the production build locally          |
| `npx astro dev --background` | Start the dev server in the background        |
| `npx astro dev status`     | Check whether the background dev server is running |
| `npx astro dev logs`       | View background dev server logs               |
| `npx astro dev stop`       | Stop the background dev server                |

By default the dev server runs at http://localhost:4321.

## Deployment (GitHub Pages)

Deployment is handled by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) — it builds the site with Astro and publishes it via GitHub Pages on every push to `main`.

One-time setup on GitHub: go to **Settings → Pages** on the repo and set **Source** to **GitHub Actions**.

The site is configured (in [`astro.config.mjs`](astro.config.mjs)) with `base: '/'`, so it's served from the root of `site`. If you rename the repo, move it to a different account, or deploy as a GitHub Pages project site instead of a root/custom domain, update `site` and `base` there to match.
