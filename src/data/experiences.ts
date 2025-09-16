export interface Experience {
  id: number;
  title: string;
  link?: string;
  position: string;
  type: string;
  duration?: {
    start: string;
    end: string;
    total: string;
  };
  recommendationContent?: string;
  recommendationLink?: string;
  description: string;
  location?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "株式会社 革新技術 (Kakushin Gijyutsu )",
    link: "https://www.kakushin-gijutu.com/",
    position: "Software Developer",
    type: "Fulltime - Remote",
    location: "Osaka, Japan",
    duration: {
      start: "December 2024",
      end: "July 2025",
      total: "8 months",
    },
    description:
      "I contributed to the development of landing pages, web applications, and mobile applications, with a strong focus on frontend design implementation. I worked mainly with Next.js for web and React Native (Expo) for mobile, while also integrating backend services using Supabase and microCMS.",
  },
  {
    id: 2,
    title: "Creative Coder Myanmar",
    link: "https://creativecodermm.com/",
    position: "Full-stack Developer",
    type: "Fulltime - Onsite",
    location: "Yangon, Myanmar",
    duration: {
      start: "August 2023",
      end: "March 2024",
      total: "8 months",
    },
    recommendationContent: "Recommendation from CTO",
    recommendationLink:
      "https://www.linkedin.com/in/suanhsawmtung/details/recommendations/",
    description:
      "At Creative Coder Myanmar, I served as a Laravel Vue.js developer, primarily focusing on the creativecodermm.com project. Here, I not only honed my coding skills but also gained hands-on experience in collaborative workflows and project management tools such as Git, GitHub, Jira, Trello, and Slack. Additionally, I acquired proficiency in Cypress test case implementation and learned the intricacies of deploying applications to staging servers.",
  },
  {
    id: 2,
    title: "Freelance",
    position: "Full-stack Developer",
    type: "Freelance",
    description:
      "Developed and maintained various web applications, collaborating with my friend and with a freelance team on my first project. In these projects, I played a key role in development, primarily utilizing TypeScript, Node.js, Laravel, React.js, Vue.js, and Prisma.",
  },
];
