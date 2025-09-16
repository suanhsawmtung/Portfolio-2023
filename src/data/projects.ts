export interface Project {
  id: number;
  title: string;
  description: string;
  links: { title: string; link: string }[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "My Care Credit",
    description:
      "A SaaS platform with multitenancy support for volunteering organizations, using React.js, Tailwind CSS, TanStack Query, Zustand, Express.js, Node.js, PostgreSQL, and Prisma.",
    links: [{ title: "View", link: "https://mycarecredit.org/" }],
    image: "/mycarecredit.png",
  },
  {
    id: 2,
    title: "Creative Coder Myanmar",
    description:
      "I am proud to have contributed to the development of the Creative Coder Myanmar Learning Platform. During my eight-month tenure at the Creative Coder Myanmar Learning Platform, I served as a Laravel Vue.js developer.",
    links: [{ title: "View", link: "https://creativecodermm.com/ " }],
    image: "/creative-coder-myanmar.png",
  },
  {
    id: 3,
    title: "Executive Club",
    description:
      "A Japanese dating Android app for women, offering safe encounters with carefully screened high-income men who pass a strict selection process. The main technologies for that project are React Native (Expo), Tamagui UI, and Supabase.",
    links: [
      {
        title: "Android",
        link: "https://play.google.com/store/apps/details?id=dev.kakushingijutu.sweethoney&pli=1",
      },
    ],
    image: "/executive-club.png",
  },
  {
    id: 4,
    title: "Work+ ",
    description:
      "A construction industry talent-matching app that connects companies with skilled workers to reduce labor shortages and streamline project matching, built with React Native (Expo) and Supabase.",
    links: [
      {
        title: "Android",
        link: "https://play.google.com/store/apps/details?id=com.kakushin.workplus",
      },
      {
        title: "IOS",
        link: "https://apps.apple.com/jp/app/work/id6747097310?l=en-US",
      },
    ],
    image: "/work-plus.png",
  },
];
