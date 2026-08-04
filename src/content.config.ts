import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cases = defineCollection({
	loader: glob({ base: './src/content/casos', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		role: z.enum(['backend', 'automation']),
		sector: z.string(),
		technologies: z.array(z.string()),
	}),
});

export const collections = { cases };
