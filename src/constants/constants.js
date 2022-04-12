import {
  Webflix,
  Covid,
  Pizza,
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
  Bootstrap
} from "../assets/images";
export const projects = [
  {
    id: 1,
    title: "Webflixx",
    img: Webflix,
    description: "Netflix influenced app",
    url: "https://webbflixx.web.app",
  },
  {
    id: 2,
    title: "Covid",
    img: Covid,
    description: "Covid-19 tracking app",
    url: "https://covid-19-tracker-global.web.app",
  },
  {
    id: 3,
    title: "Pizzeria",
    img: Pizza,
    description: "Pizzeria e-commerce site",
    url: "https://trusting-chandrasekhar-9da4df.netlify.app",
  },
];

export const skillsArray = [
  { img: HTML, skill: "HTML", color: "rgba(255,165,0,0.3)", level: "95%" },
  { img: CSS, skill: "CSS", color: "rgba(30,144,255,0.2)", level: "90%" },
  {
    img: JavaScript,
    skill: "JavaScript",
    color: "rgba(255,255,0,0.2)",
    level: "90%",
  },
  {
    img: ReactPic,
    skill: "React JS",
    color: "rgba(0,255,255,0.1)",
    level: "90%",
  },
  {
    img: Bootstrap,
    skill: "Bootstrap",
    color: "rgba(85, 60, 123,0.5)",
    level: "85%",
  },
  { img: Node, skill: "Node JS", color: "rgba(50,205,50,0.2)", level: "80%" },
  { img: Vue, skill: "Vue", color: "rgba(50,205,50,0.2)", level: "80%" },
  { img: SASS, skill: "SASS", color: "rgba(255,192,203,0.4)", level: "80%" },
  {
    img: MUI,
    skill: "Material-UI",
    color: "rgba(30,144,255,0.2)",
    level: "75%",
  },
  {
    img: MongoDB,
    skill: "MongoDB",
    color: "rgba(50,205,50,0.2)",
    level: "75%",
  },
  {
    img: JQuery,
    skill: "JQuery",
    color: "rgba(30,144,255,0.2)",
    level: "75%",
  },
];

export const about = `
const name = {
	firstName: Carl;
	lastName: Moodie;
}
`
export const linksObj = [
  {
    title: "Home",
    ext: ".html",
    img: HTML
  },
  {
    title: "About",
    ext: ".jsx",
    img: ReactPic,
  },
  {
    title: "Work",
    ext: ".js",
    img: JavaScript,
  },
  // {
  //   title: "Skills",
  //   ext: ".scss",
  //   img: SASS,
  // },
]