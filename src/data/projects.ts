interface Project{
    id: number;
    title: string;
    description: string;
    code?: string;
    demo?: string;
    image: string;
}

export const projects: Project[] =[
    {
        id: 1,
        title: "Vue Shop",
        description: "An e-commerce web application where customers can browse, add items to their cart, and make purchases. Set up with Vue, Vite, Typescript, and Tailwind CSS. Uses Vue Router for routing and Pinia for state managment.",
        code: "https://github.com/suanhsawmtung/Vue-Ecommerce-Shop",
        image: "/vue-shop.png",
    },
    {
        id: 2,
        title: "Vue Shop API",
        description: "A Laravel Project for building RESTful API for Vue Shop Ecommerce Project. You can find some APIs in the readme file of that GitHub project repository.",
        code: "https://github.com/suanhsawmtung/Laravel-Ecommerce-Backend",
        image: "/vue-shop-api.png",
    },
    {
        id: 3,
        title: "Weather App",
        description: "I built that weather app by using Vue.js, Typescript and Open Weather Api. You can find the weather of a city by typing from search bar. Sometimes, Vpn might be need to call weather api.",
        code: "https://github.com/suanhsawmtung/Vue-Typescript-Weather-App",
        demo: "https://vue-typescript-weather-app.netlify.app/",
        image: "/weather-app.png",
    },
    {
        id: 4,
        title: "Creative Coder Myanmar",
        description: "I am proud to have contributed to the development of the Creative Coder Myanmar Learning Platform. During my eight-month tenure at the Creative Coder Myanmar Learning Platform, I served as a Laravel Vue.js developer.",
        demo: "https://creativecodermm.com/",
        image: "/creative-coder-myanmar.png",
    },
]