import {
  FaPython,
  FaJava,
  FaHtml5,
  FaNode,
  FaReact,
  FaLinux,
  FaMarkdown,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaAws
} from "react-icons/fa";
import {
  DiPostgresql,
  DiCss3,
  DiSqllite,
  DiMysql,
  DiTerminal,
  DiResponsive,
  DiScrum
} from 'react-icons/di'
import {
  SiVisualstudiocode,
  SiNextdotjs,
  SiMicrosoftazure,
  SiVercel,
  SiTailwindcss
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";


// Navigation items
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experiences", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Photos", link: "#photos" },
  { name: "Contact", link: "#contact" },
];


// Hero Section
export const heroDesc = {
  title: "My Portfolio",
  author: "Kyle Huang",
  words: "As a new graduate in computer science at UWB, I'm passionate about using technology to make things convenient, useful, and enjoyable for people. During my studies, I've taken various courses such as Artificial Intelligence, Cloud Computing, Web Development, Game Development, Database Systems, Network Design and Programming, and more. My specialty is in full-stack web development. I've had hands-on experience on projects such as cloud apps on Azure, built a user-friendly BlogIt web app, and a calculator as a desktop app that solves complex expressions. For work experience, I worked as fullstack software engineer intern creating an online appointment booking website for cleaning services. I'm most familiar with programming languages like JavaScript and Python. Most importantly, I'm always up for learning new materials and best practices for continuous learning and professional growth."
}

export const resumeFileName = "Kyle_Huang_Resume.pdf"

export const quote = {
  quote: "Life consists not in holding good cards but in playing those you hold well.",
  author: "Josh Billings"
}

export const gridItems = [
  {
    id: 1,
    title: "I'm great with teamwork and collaboration",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I can quickly adapt to new projects and technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "opacity-50 bg-black",
    titleClassName: "justify-start",
    img: "img/luca-bravo-XJXWbfSo2f0-unsplash.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My current tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I am always curious on how things work.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "grid.svg",
    spareImg: "b4.svg",
  },
  {
    id: 5,
    title: "Currently migrating application on Linux Server to AWS",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "b5.svg",
    spareImg: "grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


// Work Experience
export const workExperience = [
  {
    id: 1,
    company: "Lijie Cleaning LLC",
    title: "Fullstack Software Engineer Intern",
    date: "Jan 2024 - Jun 2024",
    desc: "Created an appointment booking website from scratch with a team of two developers.",
  },
];


// Projects
export const projects = [
  {
    id: 1,
    title: "BlogIt",
    des: "Built a fullstack blog application where users can create, edit, read, and delete posts.",
    img: "blogit.png",
    iconLists: [""],
    link: "https://github.com/kylehuang041/BlogIt",
  },
  {
    id: 1,
    title: "Escape Space",
    des: "A puzzle first-person video game where the player has to escape from the space station that enslaves space miners.",
    img: "../b4.svg",
    iconLists: [""],
    link: "https://github.com/kylehuang041/EscapeSpace",
  },
  {
    id: 2,
    title: "Shortest Path Maze Solver",
    des: "It finds the shortest path of the maze from start to finish, works with large spaces too!",
    img: "../b4.svg",
    iconLists: [""],
    link: "",
  },
  {
    id: 3,
    title: "TCP-Like TFTP Network Program",
    des: "Client-server program that allows users to send and receive text data over a network",
    img: "../b4.svg",
    iconLists: [""],
    link: "",
  },
  {
    id: 4,
    title: "Cloud API Interface",
    des: "A website interface that allows users to interact with cloud storage through API calls",
    img: "../b4.svg",
    iconLists: [""],
    link: "",
  },
  {
    id: 5,
    title: "Pacman AI",
    des: "Berkley AI Pacman Project that that uses AI algorithms, probablistic inference, and reinforcement learning.",
    img: "../b4.svg",
    iconLists: [""],
    link: "",
  },
  {
    id: 6,
    title: "Bank",
    des: "Created a virtual Bank ATM application where users can create accounts, deposit, withdraw, and transfer money.",
    img: "bank.png",
    iconLists: [""],
    link: "https://github.com/kylehuang041/Bank",
  },
  {
    id: 7,
    title: "Restaurant Order",
    des: "Developed a order chat program for a restaurant that allows customers to place orders and waiters to take orders with an option of a receipt after the order.",
    img: "restaurantOrder.png",
    iconLists: [""],
    link: "https://github.com/kylehuang041/RestaurantOrderProgram",
  },
  {
    id: 8,
    title: "Calculator",
    des: "Implemented a calculator GUI that can solve complex expressions that includes modulo, parentheses, factorial, and more.",
    img: "calculatorGUI.png",
    iconLists: [""],
    link: "https://github.com/kylehuang041/Calculator",
  },
];


// Tools
export const tools = [
  {
    id: 1,
    name: "Next.js",
    img: "/nextjs.svg",
    nameImg: "nextjs.svg",
  },
  {
    id: 2,
    name: "TailwindCSS",
    img: "/tailwindcss.svg",
    nameImg: "tailwindcss.svg",
  },
  {
    id: 3,
    name: "Framer Motion",
    img: "/framer.svg",
    nameImg: "framer.svg",
  },
  {
    id: 4,
    name: "Acternity UI",
    img: "/acternity.svg",
    nameImg: "acternity.svg",
  },
  {
    id: 5,
    name: "GitHub",
    img: "/git.svg",
    nameImg: "git.svg",
  },
];


// Photos
export const photosTitle = "My Photos From Intro to Photography In High School"

export const photos = [
  {
    id: 1,
    location: "Bellevue",
    by: "Kyle Huang",
    filename: "7HuangKyleCHOICEdl0012.JPG"
  },
  {
    id: 2,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcaseOPT0004.jpg"
  },
  {
    id: 3,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcaseOPT0005.jpg"
  },
  {
    id: 4,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcaseOPT0006.jpg"
  },
  {
    id: 5,
    location: "Bellevue",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcaseOPT0002.jpg"
  },
  {
    id: 6,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleAnselizingAsShotDL0011.JPG"
  },
  {
    id: 7,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKylePSARTSHOW0037.JPG"
  },
  {
    id: 8,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKylePerspectiveDL0004.JPG"
  },
  {
    id: 9,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcase0004.JPG"
  },
  {
    id: 10,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleLeadingLinesOPT0001.jpg"
  },
  {
    id: 11,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKylePatriotismOPT0003.jpg"
  },
  {
    id: 12,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleAnselizingAsShotDL0012.JPG"
  },
  {
    id: 13,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleAnselizingAsShotDL0014.JPG"
  },
  {
    id: 14,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKylePSARTSHOW0016.jpg"
  },
  {
    id: 15,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleCHOICEdl0010.JPG"
  },
  {
    id: 16,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleCloseUp0001.JPG"
  },
  {
    id: 17,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcase0018.jpg"
  },
  {
    id: 18,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcaseOPT0003.jpg"
  },
  {
    id: 19,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKylePSARTSHOW0018.jpg"
  },
  {
    id: 20,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKylePSARTSHOW0032.jpg"
  },
  {
    id: 21,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKylePatriotismOPT0006.jpg"
  },
  {
    id: 22,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcase0019.JPG"
  },
  {
    id: 23,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcaseOPT0001.jpg"
  },
  {
    id: 24,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcaseOPT0007.jpg"
  },
  {
    id: 25,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleCloseUp0002.JPG"
  },
  {
    id: 26,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleDepthOfShotDL0018.jpg"
  },
  {
    id: 27,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleLookWithinDL0023.JPG"
  },
  {
    id: 28,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleCloseUp0004.JPG"
  },
  {
    id: 29,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleComp2OPT1.jpg"
  },
  {
    id: 30,
    location: "My Stuff",
    by: "Kyle Huang",
    filename: "7HuangKyleCHOICEopt0002.jpg"
  },
  {
    id: 31,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcase0010.jpg"
  },
  {
    id: 32,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcase0012.jpg"
  },
  {
    id: 33,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleDepthOfShotDL0020.jpg"
  },
  {
    id: 34,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleDepthOfShotDL0031.jpg"
  },
  {
    id: 35,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKylePerspectiveDL0006.JPG"
  },
  {
    id: 36,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleRepetition0002.JPG"
  },
  {
    id: 37,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcase0016.JPG"
  },
  {
    id: 38,
    location: "Bellevue High School",
    by: "Kyle Huang",
    filename: "7HuangKyleShowcase0017.JPG"
  },
  {
    id: 39,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleDepthOfShotDL0021.jpg"
  },
  {
    id: 40,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleDepthOfShotDL0024.jpg"
  },
  {
    id: 41,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleDepthOfShotDL0035.jpg"
  },
  {
    id: 42,
    location: "Snoqualmie",
    by: "Kyle Huang",
    filename: "7HuangKyleDepthOfShotDL0036.jpg"
  },
  {
    id: 43,
    location: "Bellevue",
    by: "Kyle Huang",
    filename: "7HuangKyleCHOICEdl0013.JPG"
  },
  {
    id: 44,
    location: "Bellevue",
    by: "Kyle Huang",
    filename: "7HuangKyleCHOICEdl0014.JPG"
  }
];

// Footer
// tech and tools - React Icons
const techToolsIconSize = '50px';
const techToolsBorder = '1px solid white';
const techToolsPadding = '4px';
export const techTools = [
  {
    id: 1,
    name: "Python",
    icon: <FaPython style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 2,
    name: "Java",
    icon: <FaJava style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <IoLogoJavascript style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 4,
    name: "HTML5",
    icon: <FaHtml5 style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 5,
    name: "CSS3",
    icon: <DiCss3 style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 6,
    name: "Node.js",
    icon: <FaNode style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 7,
    name: "React",
    icon: <FaReact style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 8,
    name: "Visual Studio",
    icon: <SiVisualstudiocode style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 9,
    name: "Linux",
    icon: <FaLinux style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 10,
    name: "Markdown",
    icon: <FaMarkdown style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 11,
    name: "Database",
    icon: <FaDatabase style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 12,
    name: "MySQL",
    icon: <DiMysql style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 13,
    name: "PostgreSQL",
    icon: <DiPostgresql style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 14,
    name: "SQLite",
    icon: <DiSqllite style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 15,
    name: "Terminal",
    icon: <DiTerminal style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 16,
    name: "Git Branch",
    icon: <FaGitAlt style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 17,
    name: "GitHub",
    icon: <FaGithub style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 18,
    name: "Responsive",
    icon: <DiResponsive style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 19,
    name: "NPM",
    icon: <FaNpm style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 20,
    name: "AWS",
    icon: <FaAws style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 21,
    name: "Next.js",
    icon: <SiNextdotjs style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 22,
    name: "Microsoft Azure",
    icon: <SiMicrosoftazure style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 23,
    name: "Vercel",
    icon: <SiVercel style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
  {
    id: 24,
    name: "Tailwind CSS",
    icon: <SiTailwindcss style={{ fontSize: techToolsIconSize, border: techToolsBorder, padding: techToolsPadding }} />,
  },
];

export const personalInfo = {
  photo: "Kyle_Huang.png",
  name: "Kyle Huang",
  email: "kylehuang041@gmail.com",
  school: "University of Washington - Bothell",
  major: "Computer Science and Software Engineering",
  concentration: "Information Assurance and Cybersecurity",
  status: "New Graduate"
}

// social media
export const socialMedia = [
  {
    id: 1,
    img: "link.svg",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/kyle-h/",
  },
  {
    id: 2,
    img: "git.svg",
    alt: "GitHub",
    link: "https://github.com/kylehuang041",
  },
];