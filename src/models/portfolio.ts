export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string[];
  link?: string;
  path: string;
  technologies: string[];
  slug: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Team Management System",
    description:
      "In the Team Management System (TMS) project, I took part as a Frontend Developer, focusing on building an intuitive and responsive user interface and integrating it seamlessly with backend services. TMS was developed to support teams participating in national and international competitions by offering a centralized platform for team coordination. Using React.js and TypeScript, I developed a dynamic interface that adapts well to different screen sizes, ensuring usability across both mobile and desktop devices. The UI was styled with TailwindCSS, allowing for a clean and consistent design language throughout the application. One of my key responsibilities was API integration, enabling efficient data flow between the frontend and backend. Additionally, I contributed to the implementation of security features such as JWT-based authentication and role-based access control, ensuring that users—whether team members, admins, or supervisors—could securely access platform functionalities relevant to their roles. Overall, my contribution to the TMS project helped deliver a secure, user-friendly, and scalable system that empowers teams to manage their competition processes effectively while staying connected throughout their journey.",
    image: ["/portfolio/tms.png", "/portfolio/tmsnd.png"],
    link: "https://takim.kapsul.org.tr/",
    path: "/portfolio/tms",
    slug: "tms",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind",
      "Antd",
      "JWT",
      "zustand",
      "axios",
    ],
  },
  {
    id: 2,
    title: "Kapsul Technology Platform Website",
    description:
      "Kapsül Teknoloji Platformu için geliştirilen kurumsal web sitesi; çift tema (karanlık/açık) ve iki dil desteği sunan modern bir yapıya sahiptir. Projeye geliştirme sürecinin ortasında dahil oldum ve mevcut yapıyı koruyarak kullanıcı deneyimini artırmaya yönelik sayfalar üzerinde çalıştım. Tasarımda kullanılan animasyonlar ve yüksek kaliteli görsel öğelerle profesyonel bir görünüm hedeflendi. Sorumluluklarım arasında yeni içerik alanları eklemek, siteyi tüm cihazlara uyumlu hale getirmek ve arayüzdeki genel tutarlılığı sağlamak yer aldı. Bu proje, geniş bir kitleye hitap eden, dinamik ve çağdaş bir kurumsal platform olarak tamamlandı.",
    image: ["/portfolio/kapsulweb.png", "/portfolio/kapsulwebnd.png"],
    link: "https://www.kapsul.org.tr/",
    path: "/portfolio/kapsulweb",
    technologies: [
      "React.js",
      "Typescript",
      "Tailwindcss",
      "Antd",
      "Next.js",
      "zustand",
      "axios",
    ],
    slug: "kapsulweb",
  },
  {
    id: 3,
    title: "Kapsül Notion - Management System",
    description:
      "Designed and developed the entire frontend and UI/UX design process of a comprehensive work shift and event management platform built to optimize organizational workflows. Kapsül Notion offers role-based access control (Super Admin, Admin, Event Admin, and Member roles), detailed scheduling and permission tracking for shift management, event management with calendar integration, and real-time data visualization using interactive charts. The platform also includes advanced features such as PDF/Excel export, rich text editing with CKEditor, multi-language support (i18next), and a notification system. Developed with a strong focus on scalability and user experience, it streamlines the management of complex organizational structures through a clean and responsive interface. Secure authentication ensures controlled access, while Zustand state management enables efficient data flow throughout the application. This project showcases enterprise-level architecture, modern React design patterns, and fully implemented CRUD operations.",
    image: [
      "/portfolio/kapsul-management.png",
      "/portfolio/kapsul-management-2.png",
    ],
    path: "/portfolio/kapsul-management",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "Zustand",
      "Axios",
      "React Router",
      "i18next",
      "ECharts",
      "Recharts",
      "Framer Motion",
      "GSAP",
      "jsPDF",
      "CKEditor",
    ],
    slug: "kapsul-management",
  },
  {
    id: 4,
    title: "Blog - Kapsül Technology Platform",
    description:
      "The blog page of the Kapsül Technology Platform was developed as an integrated extension of the corporate website. This section includes features such as category-based filtering, navigation to detailed post pages, author information, and suggested content areas. The goal was to deliver a user-friendly blog experience without disrupting the existing infrastructure. The page was designed with responsiveness in mind to ensure seamless performance across various devices. This project enhanced the platform’s content management and strengthened its role as an informative hub.",
    image: ["/portfolio/blog.png", "/portfolio/blognd.png"],
    link: "https://www.kapsul.org.tr/blogs",
    path: "/portfolio/kapsulblog",
    technologies: [
      "React.js",
      "Typescript",
      "Tailwindcss",
      "Antd",
      "Next.js",
      "zustand",
      "axios",
    ],
    slug: "kapsulblog",
  },
  {
    id: 5,
    title: "C-NAUTS - NASA Space Apps Challenge Health Platform",
    description:
      "C-NAUTS (Nauts-Core) is an AI-powered health monitoring platform developed for NASA's International Space Apps Challenge 2025. The project addresses the 'Build a Space Biology Knowledge Engine' challenge by analyzing astronauts' mental and physical health conditions through multiple biometric inputs including HRV, GSR, EMG, thermal imaging, and text analysis. The system consists of a Python-based backend where machine learning models were trained using NASA's open datasets to generate predictive analytics and autonomous health alerts, and a React-based frontend that presents complex health data through an intuitive dashboard featuring real-time score cards, trend visualizations, and comprehensive health assessments. Developed during an intensive 36-hour hackathon period, this full-stack solution demonstrates the integration of AI/ML technologies with modern web development to support astronaut wellbeing in challenging space environments.",
    image: ["/portfolio/cnautsHomePage.png", "/portfolio/cnautsDashboard.png"],
    link: "https://github.com/IclalAkpinar/cnauts_front",
    path: "/portfolio/cnauts",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Python",
      "Machine Learning",
      "Axios",
      "Zustand",
      "Lottie",
    ],
    slug: "cnauts",
  },
  {
    id: 6,
    title: "Focus Connect",
    description:
      "As the developer of Focus Connect, a study matching platform that won first place at the Cursor Hackathon, I was responsible for the system architecture, user interface design, authentication system, and development processes. Developed within just 3 hours during the hackathon, Focus Connect is a study partner matching platform that connects students based on their study subjects and productivity techniques such as Pomodoro. Built with React.js, TypeScript, and TailwindCSS, the modern and responsive interface allows users to select their study preferences through card-based options and match in real time with others who share similar goals. The platform also includes features such as appointment scheduling, study session management, and profile customization, providing an engaging and user-friendly study experience.",
    image: ["/portfolio/focusConnect2.png", "/portfolio/focusConnect.png"],
    path: "/portfolio/focus-connect",
    slug: "focus-connect",
    technologies: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "Ant Design",
      "React Router",
      "Axios",
      "Session Authentication",
      "RESTful API",
    ],
  },
  {
    id: 7,
    title: "Benim Kampüsüm - A Digital Platform for University Interaction",
    description:
      "Benim Kampüsüm is a digital platform that enables secure communication between university students, academics, and club managers. Developed during a hackathon under the theme 'simplifying student life' this platform allows users to create profile cards based on their interests, participate in approved events, and benefit from academic mentorship opportunities. With role-based user structures, students, academics, and club presidents can interact securely and effectively. As a Frontend Developer, I was involved in critical stages, from designing the user interface to integrating dynamic components. I contributed to creating a secure and efficient social network environment by developing user-friendly designs and interactive elements. Our team’s participation in this hackathon led us to develop an innovative platform and win 3rd place. This success demonstrated not only our technical skills but also our ability to problem-solve, deliver fast solutions, and collaborate effectively as a team.",
    image: [
      "/portfolio/hackathonBenimKampusum.png",
      "/portfolio/hackathonBenimKampusumnd.png",
    ],
    path: "/portfolio/benimkampusum",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Mapbox"],
    slug: "benimkampusum",
  },
  {
    id: 8,
    title: "Kapsul Scanner - UI",
    description:
      "This project was developed to track working hours and event participation using a touchscreen computer and barcode scanner. When a barcode is scanned, the system verifies the project and logs the user's attendance. I joined the project to enhance the user interface and add new features. I redesigned the layout and added functionalities like team entry/exit tracking. Additionally, I implemented a dual-theme feature where the app switches to dark mode after 6 PM and returns to light mode at 6 AM. These updates improved the overall user experience while maintaining the original system's core functionality.",
    image: ["/portfolio/scanner.png", "/portfolio/scannernd.png"],
    path: "/portfolio/scanner",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Antd",
      "Zustand",
      "Axios",
      "Use-Scan-Detection",
    ],
    slug: "scanner",
  },
  {
    id: 9,
    title: "RouteAI - AI Powered Travel Guide App",
    description:
      "RouteAI is an AI-powered travel guide app designed to personalize and optimize travel experiences. Initially started as an entrepreneurial venture, this project involved comprehensive research both on the software development side and in terms of market feasibility. Every aspect of the app, from technology choices to user experience design, was backed by thorough analysis and testing to ensure it met both technical standards and commercial potential. Built with React Native and Expo, the app integrates Firebase for user authentication and real-time database management. The modern user interface (UI) enhances the user experience, while Gemini AI provides tailored travel recommendations. React Navigation ensures seamless navigation through Stack and Tab Navigation. The project was deeply researched to ensure both its technical robustness and its commercial viability. I actively contributed to frontend development and AI integration, making sure the solution is not only scalable but also effectively aligned with user needs and market expectations.",
    image: ["/portfolio/routeai.png", "/portfolio/routeaind.png"],
    path: "/portfolio/routeai",
    technologies: [
      "React Native",
      "JavaScript",
      "Expo",
      "Firebase",
      "Gemini AI",
      "React Navigation",
    ],
    slug: "routeai",
  },
  {
    id: 10,
    title: "MIPS Assembly Simulator",
    description:
      "As part of the Computer Organization course, I developed a web-based MIPS simulator that allows users to write and execute MIPS assembly code directly in the browser while observing how each instruction affects the register and memory states in real time. Built using HTML, CSS, and JavaScript, the system parses the user’s input, converts each instruction into its corresponding 32-bit machine code, and simulates execution step by step. The simulator supports a wide range of MIPS instruction types—including arithmetic, logical, memory access, comparison, branching, and function call operations—along with label resolution and control flow handling. By bridging low-level architecture concepts with an interactive web interface, this project provides a practical and visual way to explore and understand MIPS instruction execution and processor behavior.     ",
    image: ["/portfolio/mips.png", "/portfolio/mipsnd.png"],
    path: "/portfolio/mips",
    technologies: ["JavaScript", "HTML", "CSS"],
    slug: "mips",
  },
  {
    id: 11,
    title: "Five Lane Traffic Light System – Verilog Based Digital Design",
    description:
      "In this project, I designed a traffic light system for a five-lane road as part of the Digital Design course. Using Verilog, I created a digital circuit that controls the red (R) and green (G) light states for each traffic light. During the simulation process, the transition between red and green lights for each lamp was ensured with accurate timing. Signals like a, b, c, d, db, dc, and dd control the state of each traffic light, while RST (Reset) and CLK (Clock) signals played a crucial role in resetting the circuit and providing the necessary timing. The RST signal resets the circuit to its initial state, while the CLK signal ensures proper timing for the system's operation. The simulation, conducted using the iSim tool, validated that all signals transitioned correctly within their specified time intervals. This project provided me with valuable experience in digital system design and verification, and it allowed me to practically explore Verilog's robust timing control capabilities. Additionally, I observed how simulation tools can be used to ensure design accuracy. Oracle VM VirtualBox and Project Navigator were critical in providing the virtualized environment and managing the Verilog project compilation and simulation.",
    image: ["/portfolio/verilog.png", "/portfolio/verilognd.png"],
    path: "/portfolio/verilog",
    technologies: [
      "Verilog",
      "Oracle VM VirtualBox",
      "Project Navigator",
      "iSim",
    ],
    slug: "verilog",
  },
];
