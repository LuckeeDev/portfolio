import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { SITE_URL } from './src/data/config';
import NetlifyCMS from 'astro-netlify-cms';
import icon from 'astro-icon';

const THEME_COLORS = [
	'sky',
	'emerald',
	'rose',
	'violet',
	'amber',
	'blue',
	'green',
	'red',
	'yellow',
	'indigo',
	'pink',
	'purple',
	'fuchsia',
	'cyan',
	'teal',
	'lime',
	'orange',
];

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
				site_url: 'https://lucazoppetti.me/',
				collections: [
					{
						name: 'post',
						label: 'Posts',
						folder: 'src/content/posts',
						create: true,
						format: 'frontmatter',
						preview_path: 'post/{{slug}}',
						fields: [
							{
								name: 'title',
								label: 'Title',
							},
							{
								name: 'description',
								label: 'Description',
							},
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
							{
								name: 'body',
								label: 'Body',
								widget: 'markdown',
							},
						],
					},
					{
						name: 'project',
						label: 'Projects',
						folder: 'src/content/projects',
						create: true,
						format: 'json',
						fields: [
							{
								name: 'title',
								label: 'Title',
								widget: 'string',
							},
							{
								name: 'techs',
								label: 'Technologies',
								widget: 'list',
							},
							{
								name: 'link',
								label: 'Link',
								widget: 'string',
							},
						],
					},
					{
						name: 'config',
						label: 'Configuration',
						files: [
							{
								name: 'theme',
								label: 'Theme',
								file: 'src/content/theme/theme.json',
								fields: [
									{
										name: 'primary',
										label: 'Primary color',
										widget: 'select',
										options: THEME_COLORS,
									},
									{
										name: 'blur_top',
										label: 'Top blur color',
										widget: 'select',
										options: THEME_COLORS,
									},
									{
										name: 'blur_bottom',
										label: 'Bottom blur color',
										widget: 'select',
										options: THEME_COLORS,
									},
								],
							},
							{
								name: 'presentation',
								label: 'Presentation',
								file: 'src/content/presentation/presentation.json',
								fields: [
									{
										name: 'email',
										label: 'Email',
										widget: 'string',
									},
									{
										name: 'title',
										label: 'Title',
										widget: 'string',
									},
									{
										name: 'description',
										label: 'Description',
										widget: 'markdown',
									},
									{
										name: 'profile',
										label: 'Profile',
										widget: 'file',
									},
									{
										name: 'socials',
										label: 'Socials',
										widget: 'list',
										fields: [
											{
												name: 'label',
												label: 'Label',
												widget: 'string',
											},
											{
												name: 'link',
												label: 'Link',
												widget: 'string',
											},
										],
									},
								],
							},
						],
					},
				],
			},
			previewStyles: ['/src/styles/cms.css'],
		}),
		icon(),
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
