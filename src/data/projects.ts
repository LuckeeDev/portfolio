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
];

export default projects;
