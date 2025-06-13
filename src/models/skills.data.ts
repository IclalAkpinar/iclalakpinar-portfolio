import { IconType } from "react-icons";
import {
  SiAntdesign,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export interface Skill {
  icon: IconType;
  name: string;
  color: string;
}

export const SkillsData: Skill[] = [
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  // { icon: VscTerminalBash, name: "Assembly", color: "#808080" },

  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss3, name: "CSS3", color: "#1572B6" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#4C566A" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },

  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  { icon: SiAntdesign, name: "Ant Design", color: "#0170FE" },

  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#6e5494" },
  { icon: SiVercel, name: "Vercel", color: "#5F6C72" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { icon: SiJira, name: "JIRA", color: "#0052CC" },

  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
];
