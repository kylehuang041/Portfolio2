import Image from "next/image"

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
  DiVisualstudio
} from 'react-icons/di'
import {
  SiNextdotjs,
  SiHuggingface,
  SiFastapi
} from "react-icons/si";
import { RiFirebaseLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";
import { TbBrandTypescript } from "react-icons/tb";
import { AiFillOpenAI } from "react-icons/ai";


// Navigation items
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experiences", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Photos", link: "#photos" },
  { name: "Contact", link: "#contact" },
];


// Hero Section
export const personalInfo = {
  photo: "Kyle_Huang.png",
  name: "Kyle Huang",
  email: "kylehuang041@gmail.com",
  schools: [
    {
      school: "Georgia Institute of Technology",
      major: "Computer Science",
      concentration: "",
      years: "Fall 2025 - June 2027 (Expected)",
      status: "Incoming freshman"
    },
    {
      school: "University of Washington - Bothell",
      major: "Computer Science and Software Engineering",
      concentration: "Information Assurance and Cybersecurity",
      years: "September 2020 - June 2024",
      status: "New Graduate"
    }
  ]
}
export const heroDesc = {
  title: "My Portfolio",
  author: "Kyle Huang",
  words: "Hello, I'm Kyle, a first-gen student. I'm an incoming master's in computer science at GA Tech this fall and a recent graduate from UWB. I'm passionate about developing technology that makes life more convenient, practical, and enjoyable. I like to understand how things work from end to end, and always eager to learn new technologies and best practices. My specialty is in full-stack development in web and artificial intelligence (AI).\n\nI'm flexible and quick to adapt to new teams, technologies, and challenges. With experience in agile scrum environments, I'm very familiar with meetings, sprints, reports, communication, teamwork, and collaboration. I’ve worked on various projects during my bachelor's at the UWB, including AI, cloud computing, web and game development, database systems, and network design and programming, and wish to learn more, such as machine learning and parallel and distributed computing, at GA Tech.\n\nI'm most comfortable with JavaScript and Python. I'm open to front-end, back-end, or full-stack software engineering roles across different areas, including web, gaming, mobile, desktop applications, and operating systems."
}
export const resumeFileName = "Kyle_Huang_Resume.pdf"
export const quote = {
  quote: "Life consists not in holding good cards but in playing those you hold well.",
  author: "Josh Billings"
}


// Grid Section
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


// Work Experience Section
export const workExperience = [
  {
    id: 1,
    company: "Product Manager Accelerator",
    title: "AI Engineer",
    date: "February 2025 - April 2025",
    desc: "Collaborating with a small team of developers and product managers to develop using AI/ML. Implementing design patterns and maintaining code quality in an Agile environment."
  },
  {
    id: 2,
    company: "NoteNinjaCo",
    title: "Software Development Engineer",
    date: "August 2024 - December 2024",
    desc: "Developed a startup with 2 engineers on a interactive study platform targets towards college students. It has a chatbot for learning and support. It can generate quizzes, summaries/notes, and flashcards using AI from user input."
  },
  {
    id: 3,
    company: "Headstarter",
    title: "AI Software Engineer Fellow",
    date: "July 2024 - September 2024",
    desc: "Implemented 5+ AI Projects using cutting-edge technologies led by top engineers from Capital One, Amazon, and Bloomberg."
  },
  {
    id: 4,
    company: "Headstarter Hackathon",
    title: "Hackathon Participant",
    date: "August 2024 - August 2024",
    desc: "In a group of 5 engineers, we created a web designer using AI chatbot and won 1st place on our track."
  },
  {
    id: 5,
    company: "Lijie Cleaning LLC",
    title: "Fullstack Software Engineer Intern",
    date: "January 2024 - June 2024",
    desc: "Created an appointment booking website for a cleaning business from scratch with a team of two developers.",
  },
];


// Projects' Section
export const projects = [
  {
    id: 1,
    title: "AI Professor Recommender",
    des: "Co-implemented an application where it can recommend professors based on the user's preference.",
    img: "ai_professor_recommender.png",
    iconLists: [""],
    link: "https://github.com/kylehuang041/ai-rag-ratemyprofessor",
  },
  {
    id: 1,
    title: "AI Flashcards Saas",
    des: "Co-developed an application where it can generate flashcards from user input with OpenAI",
    img: "ai_flashcards_saas.png",
    iconLists: [""],
    link: "https://github.com/MounirMkhal/ai-flashcard",
  },
  {
    id: 1,
    title: "AI Customer Support Chatbot",
    des: "Collaborated with one team member in creating an AI assistant for customer support at The Skin Clinic MedSpa.",
    img: "ai_customer_support_chatbot.png",
    iconLists: [""],
    link: "https://github.com/kylehuang041/ai_chat_support",
  },
  {
    id: 1,
    title: "AI Web Designer",
    des: "Coded with a team of 5 to build an AI-powered web designer application using chatbot.",
    img: "embercraft.png",
    iconLists: [""],
    link: "https://github.com/karla-zamora/ai_web_optimizer",
  },
  {
    id: 1,
    title: "Pantry Tracker",
    des: "It is inventory tracker to manage items by name and quantity.",
    img: "pantry_tracker.png",
    iconLists: [""],
    link: "https://github.com/kylehuang041/PantryTracker",
  },
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


// Photos' Section
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

// Footer Section
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
// Social Media Icons
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

const iconStyle = {
  fontSize: '50px',
  border: '1px solid white',
  padding: '4px',
};
export const techTools = [
  { id: 1, name: "Python", icon: <FaPython style={iconStyle} /> },
  { id: 2, name: "Java", icon: <FaJava style={iconStyle} /> },
  { id: 3, name: "JavaScript", icon: <IoLogoJavascript style={iconStyle} /> },
  { id: 4, name: "Typescript", icon: <TbBrandTypescript style={{ fontSize: "60px", margin: "-5px" }} /> },
  { id: 5, name: "HTML5", icon: <FaHtml5 style={iconStyle} /> },
  { id: 6, name: "CSS3", icon: <DiCss3 style={iconStyle} /> },
  { id: 7, name: "Node.js", icon: <FaNode style={iconStyle} /> },
  { id: 8, name: "React", icon: <FaReact style={iconStyle} /> },
  { id: 9, name: "Visual Studio", icon: <DiVisualstudio style={iconStyle} /> },
  { id: 10, name: "Linux", icon: <FaLinux style={iconStyle} /> },
  { id: 11, name: "Markdown", icon: <FaMarkdown style={iconStyle} /> },
  { id: 12, name: "Database", icon: <FaDatabase style={iconStyle} /> },
  { id: 13, name: "MySQL", icon: <DiMysql style={iconStyle} /> },
  { id: 14, name: "PostgreSQL", icon: <DiPostgresql style={iconStyle} /> },
  { id: 15, name: "SQLite", icon: <DiSqllite style={iconStyle} /> },
  { id: 16, name: "Terminal", icon: <DiTerminal style={iconStyle} /> },
  { id: 17, name: "Git Branch", icon: <FaGitAlt style={iconStyle} /> },
  { id: 18, name: "GitHub", icon: <FaGithub style={iconStyle} /> },
  { id: 19, name: "Responsive", icon: <DiResponsive style={iconStyle} /> },
  { id: 20, name: "NPM", icon: <FaNpm style={iconStyle} /> },
  { id: 21, name: "AWS", icon: <FaAws style={iconStyle} /> },
  { id: 22, name: "Next.js", icon: <SiNextdotjs style={iconStyle} /> },
  { id: 23, name: "Microsoft Azure", icon: <VscAzure style={iconStyle} /> },
  { id: 24, name: "Vercel", icon: <IoLogoVercel style={iconStyle} /> },
  { id: 25, name: "Tailwind CSS", icon: <RiTailwindCssFill style={iconStyle} /> },
  { id: 26, name: "OpenAI", icon: <AiFillOpenAI style={iconStyle} /> },
  { id: 27, name: "Firebase", icon: <RiFirebaseLine style={iconStyle} /> },
  { id: 28, name: "Pinecone", icon: <Image style={iconStyle} width={45} height={45} src="pinecone-icon-seeklogo.svg" /> },
  { id: 29, name: "Hugging Face", icon: <SiHuggingface style={iconStyle} /> },
  { id: 30, name: "FastAPI", icon: <SiFastapi style={iconStyle} /> },
];