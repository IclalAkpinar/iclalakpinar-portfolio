export interface AchievementItem {
  id: number;
  title: string;
  description?: string;
  date?: string;
  image: string;
  path?: string; // opsiyonel: tıklanınca gidilecek route
  badge?: string; // sağ altta gösterilecek yazı
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
    title: "Web Hackathon - 3rd Prize",
    description:
      "Achieved 3rd place as a finalist in the web hackathon with the Benim Kampüsüm app, designed to improve campus life for students.",
    date: "May 2025",
    image: "/achievements/webhackathon.webp",
    badge: "Benim Kampüsüm",
    path: "/portfolio/benimkampusum",
  },
  {
    id: 3,
    title: "Solution Hackathon – KOSGEB supported 3rd Prize",
    description:
      "Won 3rd Prize at the Social Innovation Impact Program, a KOSGEB-supported hackathon focused on developing impactful solutions for society.",
    date: "June 2024",
    image: "/achievements/sia.webp",
    badge: "Social Innovation",
  },
  {
    id: 4,
    title: "MEVKA - Technical Consultancy and Mentoring Support Winner",
    description:
      "Our RouteAI project was awarded technical consultancy and mentoring support by Mevlana Development Agency for its innovative approach.",

    date: "February 2024",
    image: "/achievements/mevka.webp",
    badge: "RouteAI Project",
  },
];
