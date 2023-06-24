import {
	Webflix,
	Covid,
	Pizza,
	Dashboard,
	CSS,
	JavaScript,
	HTML,
	ReactPic,
	Node,
	Vue,
	SASS,
	MUI,
	MongoDB,
	JQuery,
	Bootstrap,
} from '../assets/images';

export const PROJECTS = [
	{
		id: 1,
		title: 'Webflix',
		img: Webflix,
		description: 'Netflix influenced app',
		url: 'https://webbflixx.web.app',
	},
	{
		id: 2,
		title: 'Dashboard',
		img: Dashboard,
		description: 'Fluid task management',
		url: 'https://task-dashboard.web.app',
	},
	{
		id: 3,
		title: 'Covid',
		img: Covid,
		description: 'Covid-19 tracking app',
		url: 'https://covid-19-tracker-global.web.app',
	},
	{
		id: 4,
		title: 'Pizzeria',
		img: Pizza,
		description: 'Pizzeria e-commerce site',
		url: 'https://pizzeria-moodi.web.app',
	},
];

export const SKILLS = [
	{ img: HTML, skill: 'HTML', color: 'rgba(255,165,0,0.3)', level: '95%' },
	{ img: CSS, skill: 'CSS', color: 'rgba(30,144,255,0.2)', level: '90%' },
	{
		img: JavaScript,
		skill: 'JavaScript',
		color: 'rgba(255,255,0,0.2)',
		level: '90%',
	},
	{
		img: ReactPic,
		skill: 'React JS',
		color: 'rgba(0,255,255,0.1)',
		level: '90%',
	},
	{
		img: Bootstrap,
		skill: 'Bootstrap',
		color: 'rgba(85, 60, 123,0.5)',
		level: '90%',
	},
	{
		img: MUI,
		skill: 'Material-UI',
		color: 'rgba(30,144,255,0.2)',
		level: '85%',
	},
	{ img: Node, skill: 'Node JS', color: 'rgba(50,205,50,0.2)', level: '80%' },
	{
		img: MongoDB,
		skill: 'MongoDB',
		color: 'rgba(50,205,50,0.2)',
		level: '80%',
	},
	{ img: Vue, skill: 'Vue', color: 'rgba(50,205,50,0.2)', level: '80%' },
	{ img: SASS, skill: 'SASS', color: 'rgba(255,192,203,0.4)', level: '80%' },
	{
		img: JQuery,
		skill: 'JQuery',
		color: 'rgba(30,144,255,0.2)',
		level: '75%',
	},	
];

export const ABOUT = `
const name = {
	firstName: Carl;
	lastName: Moodie;
}
`;

export const LINKS = [
	{
		title: 'Home',
		ext: '.html',
		img: HTML,
	},
	{
		title: 'About',
		ext: '.jsx',
		img: ReactPic,
	},
	{
		title: 'Work',
		ext: '.js',
		img: JavaScript,
	},
	// {
	//   title: "Skills",
	//   ext: ".scss",
	//   img: SASS,
	// },
];

export const PATHS = {
	'/': 0,
	'/home': 0,
	'/about': 1,
	'/work': 2,
};

export const MIXPANEL_TOKEN = process.env.REACT_APP_MIXPANEL_TOKEN;

export const ABOUT_DETAILS = {
	firstName: "'Carl'",
	lastName: "'Moodie'",
	img: "'/images/carl.png'",
	profession: "'developer'",
	favoriteStack: "'MERN'",
	willingToLearn: 'true',
};
