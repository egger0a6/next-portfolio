import { email, github, linkedin, slack } from "@/public";

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

//TODO finish adding link urls (remove slack maybe)
export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "#",
  },
  {
    id: "1",
    title: "GitHub",
    iconUrl: github,
    url: "https://github.com/egger0a6",
  },
  {
    id: "2",
    title: "email",
    iconUrl: email,
    url: "mailto:zacheggert37@gmail.com",
  },
  {
    id: "3",
    title: "slack",
    iconUrl: slack,
    url: "https://slack.com/connect",
  },
];