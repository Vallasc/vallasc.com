import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const parseDate = (dateStr: string) => {
	const [day, month, year] = dateStr.split('/').map(Number);
	return new Date(year, month - 1, day);
  };

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.string().transform(parseDate),
		readTime: z.number(),
		lang: z.string(),
		tags: z.array(z.string()),
		coverImage: z.string().optional(),
		coverImageDescription: z.string().optional(),
	}),
});

export const collections = { blog };
