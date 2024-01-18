import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { SITE_URL } from './src/data/config';
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		sitemap(),
		robotsTxt(),
		NetlifyCMS({
			config: {
				backend: {
					name: 'git-gateway',
					branch: 'main',
				},
				publish_mode: 'editorial_workflow',
				media_folder: 'public/images',
				public_folder: '/images',
				site_url: 'https://lucazoppetti.netlify.app/',
				collections: [
					{
						name: 'post',
						label: 'Posts',
						folder: 'src/content/posts',
						create: true,
						format: 'frontmatter',
						preview_path: 'post/{{slug}}',
						fields: [
							{ name: 'title', label: 'Title' },
							{ name: 'description', label: 'Description' },
							{
								name: 'publishedAt',
								label: 'Date',
								widget: 'date',
							},
							{
								name: 'isPublish',
								label: 'Publish',
								widget: 'boolean',
								default: true,
							},
							{ name: 'body', label: 'Body', widget: 'markdown' },
						],
					},
				],
			},
			previewStyles: ['/src/styles/cms.css'],
		}),
	],
	site: SITE_URL,
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'nord',
			wrap: false,
		},
	},
});
