<template>
    <section id="about" class="w-screen py-28 lg:min-h-screen flex flex-col flex-wrap lg:flex-row justify-between gap-8 lg:gap-0 lg:gap-y-5 bg-[#030712] overflow-x-hidden">
        <div class="w-full lg:w-2/6 h-auto lg:h-full ps-6 md:ps-16 lg:ps-0 flex justify-start lg:justify-center items-start">
            <div class="w-11/12 sm:w-1/3 lg:w-4/6 h-auto overflow-hidden rounded-lg">
                <img src="../assets/portfolio-about.jpg" class="w-full h-auto" alt="about">
            </div>
        </div>
        <div class="w-full lg:w-4/6 lg:h-full flex items-start">
            <div class="w-full px-6 md:ps-16 lg:ps-0 md:pe-16 text-white">
                <h3 
                    v-if="windowWidth < 1240"
                    class="mb-3 font-bold text-3xl text-green-400"
                >
                    Who am I? As I mentioned above, my name is Suanh Sawm Tung.
                </h3>
                <h3 class="mb-3 font-bold text-3xl text-green-400" v-else>
                    About Me!
                </h3>
                <p class="mb-6 sm:mb-3 text-sm text-zinc-400">
                    I'm Chin, one of Myanmar's ethnic groups, and I understand that my name can be a bit tricky to pronounce.
                    For simplicity, you can call me Augustine, which is my Christian name. I'm 24 years old and currently reside in Yangon.
                    Professionally, I'm a full-stack web developer with over one year of hands-on experience. 
                    I have a strong affinity for working with Laravel and Vue.js. 
                </p>
                <p class="mb-6 sm:mb-3 text-sm text-zinc-400">
                    I finished my matriculation exam in 2015 and began studying Petroleum Engineering at Technological University (Thanlyin). 
                    In 2020, I took a break from university due to COVID-19, and I have remained on break until now. 
                    During this time, I found my passion for programming through YouTube videos. 
                    I started learning programming in 2022, overcoming some inconveniences.
                </p>
                <p class="mb-6 sm:mb-3 text-sm text-zinc-400">
                    In my free time, I enjoy watching YouTube videos, particularly programming channels, which often inspire project ideas. 
                    I'm passionate about socializing and spending time with friends, creating memorable experiences together. 
                    Additionally, I have an intermediate level of proficiency in English and obtained JLPT N4 certification in Japanese in 2023.
                </p>
            </div>
        </div>
        <div class="w-full text-white lg:w-2/6 h-auto px-6 md:px-16 lg:px-0 lg:pe-8 flex justify-start lg:justify-end items-start">
            <div class="w-full lg:w-5/6 h-auto overflow-hidden">
                <h3 class="mb-3 py-3 font-semibold text-xl text-white uppercase tracking-widest border-b-2 border-green-400">
                    Education
                </h3>
                <div class="w-full flex items-center gap-3 lg:gap-2 mb-5">
                    <div class="w-1/12 lg:w-1/6 h-auto">
                        <img src="/behs.png" class="w-full h-auto" alt="behs">
                    </div>
                    <span class="w-5/6 text-xs text-zinc-400">High School Graduate, B.E.H.S (4) Thaketa, Yangon, Myanmar</span>
                </div>
                <div class="w-full flex items-start sm:items-center lg:items-start gap-3 lg:gap-2 mb-5">
                    <div class="w-1/12 lg:w-1/6 h-auto">
                        <img src="/ttu.png" class="w-full h-auto" alt="ttu">
                    </div>
                    <span class="w-5/6 text-xs text-zinc-400">
                        2016 ~ 2020 - Enrolled at TTU (Thanlyin Technological University) in 2016 and successfully completed coursework up to the fourth year.
                        Currently on hiatus, taking a break from studies due to the impact of COVID-19 and political situation.
                    </span>
                </div>
            </div>
        </div>
        <div class="w-full text-white lg:w-2/6 h-auto px-6 md:px-16 lg:px-0 lg:pe-8 flex justify-start items-start">
            <div class="w-full h-auto overflow-hidden">
                <h3 class="mb-3 py-3 font-semibold text-xl text-white uppercase tracking-widest border-b-2 border-green-400">
                    Experiences
                </h3>
                <div class="w-full flex items-start gap-3 lg:gap-2 mb-5">
                    <div class="w-2/12 lg:w-1/6 h-auto">
                        <CCLogo class="w-full h-auto" />
                    </div>
                    <div class="w-10/12 lg:w-5/6 flex flex-col justify-start">
                        <h5 class="text-md font-semibold">Creative Coder Myanmar</h5>
                        <a href="https://creativecodermm.com/" class="text-xs text-zinc-400 mb-2" target="_blank">
                            https://creativecodermm.com/
                        </a>
                        <h5 class="text-xs">Laravel-VueJS Developer</h5>
                        <h5 class="text-xs">Fulltime - August 2023 ~ March 2024 (8 months)</h5>
                        <a 
                            href="https://www.linkedin.com/in/suanhsawmtung/details/recommendations/" 
                            target="_blank"
                            class="text-xs underline mb-2"
                        >
                            Recommendation from CTO
                        </a>
                        <p class="text-xs text-zinc-400">
                            At Creative Coder Myanmar, I served as a Laravel Vue.js developer, primarily focusing on the creativecodermm.com project. 
                            Here, I not only honed my coding skills but also gained hands-on experience in collaborative workflows and project management 
                            tools such as Git, GitHub, Jira, Trello, and Slack. Additionally, I acquired proficiency in Cypress test case implementation and 
                            learned the intricacies of deploying applications to staging servers.
                        </p>
                    </div>
                </div>
                <div class="w-full flex items-start gap-3 lg:gap-2 mb-5">
                    <div class="w-2/12 lg:w-1/6 h-auto">
                        <img src="/developer2.png" class="w-full h-auto" alt="ttu">
                    </div>
                    <div class="w-10/12 lg:w-5/6 flex flex-col justify-start">
                        <h5 class="text-md font-semibold my-2">Freelance</h5>
                        <h5 class="text-xs">Laravel-VueJS Developer</h5>
                        <h5 class="text-xs mb-2">Remote - February 2023 ~ June 2023 (5 months)</h5>
                        <p class="text-xs text-zinc-400">
                            Joined a freelance team, where I participated in various projects over a five-month period. 
                            During this time, I contributed as a team member to the development and maintenance of three Laravel-Vue.js projects. 
                            My tasks included implementing new designs, adding features, and fixing bugs. This experience marked my introduction to real-world project collaboration and 
                            significantly enhanced my skills in project development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full text-white lg:w-2/6 h-auto px-6 md:px-16 lg:px-0 lg:pe-8 flex justify-start items-start">
            <div class="w-full lg:w-5/6 h-auto overflow-hidden">
                <h3 class="mb-3 py-3 font-semibold text-xl text-white uppercase tracking-widest border-b-2 border-green-400">
                    Skills
                </h3>
                <div class="w-full h-[360px] lg:h-[250px] my-12 lg:my-8 p-2 shadow shadow-green-400 bg-slate-900 border-b-4 border-green-400">
                    <div class="w-full flex flex-col justify-start gap-y-1 items-center sm:pt-2 pb-4 lg:pt-0 lg:pb-3 border-b-[0.5px] border-zinc-400">
                        <CurlyBrackets class="text-green-400" />
                        <h5 class="text-md font-semibold">
                            Programming languages & Tools
                        </h5>
                    </div>
                    <div class="py-4 lg:py-2">
                        <p class="text-xs text-zinc-400 mb-5 lg:mb-3">
                            <span class="me-12"></span>
                            I'm familiar with several programming languages, although I rarely use them directly in my coding. 
                            Instead, I primarily work with frameworks and libraries based on those languages.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                JavaScript
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                TypeScript
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                PHP
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                Git
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                GitHub
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                Jira
                            </span>
                        </div>
                    </div>
                </div>
                <div class="w-full h-[360px] lg:h-[250px] my-12 lg:my-8 p-2 shadow shadow-green-400 bg-slate-900 border-b-4 border-green-400">
                    <div class="w-full flex flex-col justify-start gap-y-1 items-center sm:pt-2 pb-4 lg:pt-0 lg:pb-3 border-b-[0.5px] border-zinc-400">
                        <Code class="text-green-400" />
                        <h5 class="text-md font-semibold">
                            Frontend Development
                        </h5>
                    </div>
                    <div class="py-4 lg:py-2">
                        <p class="text-xs text-zinc-400 mb-5 lg:mb-3">
                            <span class="me-12"></span>
                            Developing static websites and single-page applications (SPAs) 
                            using current technologies is a core part of my skill set
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                HTML
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                CSS
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                Vue JS
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                React JS
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                Next JS
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                Tailwind CSS
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                Bootstrap 5
                            </span>
                        </div>
                    </div>
                </div>
                <div class="w-full h-[360px] lg:h-[250px] my-12 lg:my-8 p-2 shadow shadow-green-400 bg-slate-900 border-b-4 border-green-400">
                    <div class="w-full flex flex-col justify-start gap-y-1 items-center sm:pt-2 pb-4 lg:pt-0 lg:pb-3 border-b-[0.5px] border-zinc-400">
                        <Server class="text-green-400" />
                        <h5 class="text-md font-semibold">
                            Backend Development
                        </h5>
                    </div>
                    <div class="py-4 lg:py-2">
                        <p class="text-xs text-zinc-400 mb-5 lg:mb-3">
                            <span class="me-12"></span>
                            In backend development, my specialization lies in Laravel and SQL data types. 
                            However, I committed to continuous learning other technologies to further enhance my expertise for future growth
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                Laravel
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                Express JS
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                Node JS
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                MySQL
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                PostgresSQL
                            </span>
                            <span
                                class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                            >
                                Prisma
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import CCLogo from './icons/CCLogo.vue';
import CurlyBrackets from './icons/CurlyBrackets.vue';
import Code from './icons/Code.vue';
import Server from './icons/Server.vue';

defineProps<{
    windowWidth: number,
}>();


</script>