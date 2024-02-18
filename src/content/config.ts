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

const projectsCollection = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		techs: z.array(z.string()),
		link: z.string().url(),
	})
});

const tailwindColorEnum = z.enum(['sky', 'emerald', 'rose', 'violet', 'amber', 'blue', 'green', 'red', 'yellow', 'indigo', 'pink', 'purple', 'fuchsia', 'cyan', 'teal', 'lime', 'orange']);

const themeCollection = defineCollection({
	type: 'data',
	schema: z.object({
		primary: tailwindColorEnum,
		blur_top: tailwindColorEnum,
		blur_bottom: tailwindColorEnum
	})
})

export const collections = {
	posts: postsCollection,
	presentation: presentationCollection,
	projects: projectsCollection,
	theme: themeCollection
};
