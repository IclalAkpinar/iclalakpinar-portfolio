export interface AchievementItem {
  id: number;
  title: string;
  description?: string;
  date?: string;
  image: string;
  path?: string;
  badge?: string;
}

export const achievements: AchievementItem[] = [
  {
    id: 1,
    title: "TEKNOFEST - Finalist",
    description:
      "Finalist in the Tourism Technologies category with our RouteAI project, which aims to bring innovative solutions to the tourism sector.",
    date: "September 2024",
    image: "/achievements/teknofest.webp",
    badge: "RouteAI",
    path: "/portfolio/routeai",
  },
  {
    id: 2,
    title: "Paribu University Code Prix - 1st Place",
    description:
      "Won the first place at the Paribu University Code Prix Konya with the project C-NAUTS. A Solidity-based strategy on a virtual track earned the grand prize of 90000 TL.",
    date: "October 2025",
    image: "/achievements/codePrix.webp",
    badge: "C-NAUTS",
  },
  {
    id: 3,
    title: "Cursor Hackathon - 1st Place",
    description:
      "Won the first place at the Cursor Hackathon with Focus Connect. The platform matches students by courses and productivity techniques like Pomodoro, boosting motivation and enabling real-time study partner connections.",
    date: "October 2025",
    image: "/achievements/cursorHackathon.webp",
    badge: "Focus Connect",
    path: "/portfolio/focus-connect",
  },
  {
    id: 4,
    title: "Web Hackathon - 3rd Prize",
    description:
      "Achieved 3rd place as a finalist in the web hackathon with the Benim Kampüsüm app, designed to improve campus life for students.",
    date: "May 2025",
    image: "/achievements/webhackathon.webp",
    badge: "Benim Kampüsüm",
    path: "/portfolio/benimkampusum",
  },
  {
    id: 5,
    title: "Solution Hackathon – KOSGEB supported 3rd Prize",
    description:
      "Won 3rd Prize at the Social Innovation Impact Program, a KOSGEB-supported hackathon focused on developing impactful solutions for society.",
    date: "June 2024",
    image: "/achievements/sia.webp",
    badge: "Social Innovation",
  },
  {
    id: 6,
    title: "MEVKA - Technical Consultancy and Mentoring Support Winner",
    description:
      "Our RouteAI project was awarded technical consultancy and mentoring support by Mevlana Development Agency for its innovative approach.",

    date: "February 2024",
    image: "/achievements/mevka.webp",
    badge: "RouteAI Project",
  },
];
