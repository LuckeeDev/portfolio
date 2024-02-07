export type Project = {
	title: string;
	techs: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: 'LuTeX',
		techs: ['LaTeX'],
		link: 'https://tex.lucazoppetti.me/',
	},
	{
		title: 'Five nights at DIFA',
		techs: ['C++', 'SFML', 'Tiled'],
		link: 'https://github.com/LuckeeDev/fnad',
	},
	{
		title: 'Analytical Mechanics',
		techs: ['Python'],
		link: 'https://github.com/LuckeeDev/analytical_mechanics',
	},
];

export default projects;
