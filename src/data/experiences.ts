interface Experience{
    id: number;
    title: string;
    link?: string;
    position: string;
    type: string;
    start: string;
    end: string;
    total: string;
    recommendationContent?: string;
    recommendationLink?: string;
    description: string;
}

export const experiences: Experience[] = [
    {
        id: 1,
        title: "Creative Coder Myanmar",
        link: "https://creativecodermm.com/",
        position: "Laravel-VueJS Developer",
        type: "Fulltime",
        start: "August 2023",
        end: "March 2024",
        total: "8 months",
        recommendationContent: "Recommendation from CTO",
        recommendationLink: "https://www.linkedin.com/in/suanhsawmtung/details/recommendations/",
        description: "At Creative Coder Myanmar, I served as a Laravel Vue.js developer, primarily focusing on the creativecodermm.com project. Here, I not only honed my coding skills but also gained hands-on experience in collaborative workflows and project management tools such as Git, GitHub, Jira, Trello, and Slack. Additionally, I acquired proficiency in Cypress test case implementation and learned the intricacies of deploying applications to staging servers.",
    },
    {
        id: 2,
        title: "Freelance",
        position: "Laravel-VueJS Developer",
        type: "Remote",
        start: "February 2023",
        end: "June 2023",
        total: "5 months",
        description: "Joined a freelance team, where I participated in various projects over a five-month period. During this time, I contributed as a team member to the development and maintenance of three Laravel-Vue.js projects. My tasks included implementing new designs, adding features, and fixing bugs. This experience marked my introduction to real-world project collaboration and significantly enhanced my skills in project development.",
    },
]