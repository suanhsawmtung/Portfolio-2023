export interface Skill {
    id: number;
    component: string;
    title: string;
    content: string;
    tags: string[]
}


export const skills: Skill[] = [
    {
        id: 1,
        component: "CurlyBrackets",
        title: "Programming languages & Tools",
        content: "I'm familiar with several programming languages, although I rarely use them directly in my coding. Instead, I primarily work with frameworks and libraries based on those languages.",
        tags: [
            "JavaScript",
            "TypeScript",
            "PHP",
            "Git",
            "GitHub",
            "Jira"
        ]
    },
    {
        id: 2,
        component: "Code",
        title: "Frontend Development",
        content: "Developing static websites and single-page applications (SPAs) using current technologies is a core part of my skill set",
        tags: [
            "HTML",
            "CSS",
            "VueJs",
            "ReactJs",
            "NextJs",
            "Tailwind CSS",
            "Bootstrap 5"
        ]
    },
    {
        id: 3,
        component: "Server",
        title: "Backend Development",
        content: "In backend development, my specialization lies in Laravel and SQL data types. However, I committed to continuous learning other technologies to further enhance my expertise for future growth",
        tags: [
            "Laravel",
            "ExpressJS",
            "NodeJs",
            "MySQL",
            "PostgresSQL",
            "Prisma"
        ]
    },
];