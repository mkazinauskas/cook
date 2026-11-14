import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    servings: z.number().int().positive().optional(),
    // What the servings slider counts, e.g. "Loaves"; defaults to "Servings".
    servingsLabel: z.string().optional(),
    hydration: z.number().positive().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { recipes };
