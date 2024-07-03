import { aws, choomz, django, docker, dota, email, express, firebase, fm, git, github, html, java, javascript, linkedin, mongodb, nextjs, nodejs, postgresql, python, react, reactRouter, solePoll, squadSwap, tailwindcss, typescript, wellfound } from "@/public";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "Contact",
    url: "#contact",
  },
];

//TODO finish adding link urls - Dice maybe?
export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "/",
  },
  {
    id: "1",
    title: "GitHub",
    iconUrl: github,
    url: "https://github.com/egger0a6",
  },
  {
    id: "2",
    title: "wellfound",
    iconUrl: wellfound,
    url: "/",
  },
  {
    id: "3",
    title: "email",
    iconUrl: email,
    url: "mailto:zacheggert37@gmail.com",
  },
];

export const techStack = [
  {
    id: "0",
    title: "Python",
    icon: python,
  },
  {
    id: "1",
    title: "Java",
    icon: java,
  },
  {
    id: "2",
    title: "Next.js",
    icon: nextjs,
  },
  {
    id: "3",
    title: "React",
    icon: react,
  },
  {
    id: "4",
    title: "JavaScript",
    icon: javascript,
  },
  {
    id: "5",
    title: "TypeScript",
    icon: typescript,
  },
  {
    id: "6",
    title: "AWS",
    icon: aws,
  },
  {
    id: "7",
    title: "Express",
    icon: express,
  },
  {
    id: "8",
    title: "MongoDB",
    icon: mongodb,
  },
  {
    id: "9",
    title: "html",
    icon: html,
  },
  {
    id: "10",
    title: "Firebase",
    icon: firebase,
  },
  {
    id: "11",
    title: "Framer Motion",
    icon: fm,
  },
  {
    id: "12",
    title: "Node.js",
    icon: nodejs,
  },
  {
    id: "13",
    title: "Django",
    icon: django,
  },
  {
    id: "14",
    title: "Docker",
    icon: docker,
  },
  {
    id: "15",
    title: "Git",
    icon: git,
  },
  {
    id: "16",
    title: "PostgreSQL",
    icon: postgresql,
  },
  {
    id: "17",
    title: "React Router",
    icon: reactRouter,
  },
  {
    id: "18",
    title: "Tailwind CSS",
    icon: tailwindcss,
  },
];

export const projects = [
  {
    id: "0",
    title: "Choomz",
    subtitle: " - Video Conferencing App",
    description: "This app offers a straightforward video conferencing experience. Effortlessly connect with others using Choomz.",
    liveUrl: "https://video-conference-clone.vercel.app/",
    repoUrl: "https://github.com/egger0a6/video-conference-clone",
    thumbnail:  choomz,
  },
  {
    id: "1",
    title: "Squad Swap",
    subtitle: " - Online Marketplace",
    description: "Squad Swap is an online marketplace where friends, family, and similiar-interest groups can buy and sell their goods through a bidding/buying/bartering process.",
    liveUrl: "https://squad-swap.onrender.com/",
    repoUrl: "https://github.com/egger0a6/squad-swap",
    thumbnail:  squadSwap,
  },
  {
    id: "2",
    title: "Sole Poll",
    subtitle: " - Online Poll App",
    description: "Quickly and easily create and deliver online polls. Send surveys and get feedback in just a few steps.",
    liveUrl: "https://sole-poll.fly.dev/",
    repoUrl: "https://github.com/egger0a6/sole-poll",
    thumbnail:  solePoll,
  },
  {
    id: "3",
    title: "Dota 2 Hero Guides",
    subtitle: " - Dota 2 Companion App",
    description: "With this app, you can create simple itemization guides for any hero in the multiplayer online battle arena (MOBA) video game, Dota 2.",
    liveUrl: "https://dota2-hero-guides.onrender.com/",
    repoUrl: "https://github.com/egger0a6/Dota2-Hero-Guides",
    thumbnail:  dota,
  },
];