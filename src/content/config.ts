import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		publishedAt: z.date(),
		description: z.string(),
		isPublish: z.boolean(),
		isDraft: z.boolean().default(false),
	}),
});

const presentationCollection = defineCollection({
	type: 'data',
	schema: z.object({
		email: z.string().email(),
		title: z.string(),
		description: z.string(),
		profile: z.string(),
		socials: z.array(
			z.object({
				link: z.string().url(),
				label: z.string(),
			})
		),
	}),
});

export const collections = {
	posts: postsCollection,
	presentation: presentationCollection,
};
