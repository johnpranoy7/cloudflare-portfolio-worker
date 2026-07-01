import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.enum(['ai', 'microservices', 'games', 'research']),
		techStack: z.array(z.string()),
		githubUrl: z.string().url().optional(),
		liveUrl: z.string().url().optional(),
		additionalGithubUrls: z
			.array(
				z.object({
					label: z.string(),
					url: z.string(),
				}),
			)
			.optional(),
		featured: z.boolean().default(false),
	}),
});

const publications = defineCollection({
	loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		venue: z.string(),
		pubDate: z.coerce.date(),
		paperUrl: z.string().url(),
	}),
});

export const collections = { projects, publications };
