## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Write all code in TypeScript. Before committing, run `npm run format`, `npm run check` and `npm test`; CI checks formatting, types and tests and blocks the deploy if any of them fails.

## Content conventions

Recipes use European (metric) measuring units — grams (g) and millilitres (ml) for weights and volumes, °C for temperatures. Avoid US units like cups, ounces, pounds, or °F-only temperatures. Small quantities of spices/seasoning may still use tsp/tbsp.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
