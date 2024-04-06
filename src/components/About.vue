<template>
    <section id="about" class="w-screen pt-28 lg:min-h-screen flex flex-col flex-wrap lg:flex-row justify-between gap-8 lg:gap-0 lg:gap-y-5 bg-[#030712] overflow-x-hidden">
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
                    Professionally, I'm a full-stack web developer with six months of hands-on experience. 
                    I have a strong affinity for working with Laravel and Vue.js. 
                </p>
                <p class="mb-6 sm:mb-3 text-sm text-zinc-400">
                    I finished my matriculation exam in 2015 and began studying Petroleum Engineering at Technological University (Thanlyin). 
                    In 2020, I took a break from university due to COVID-19, and I have remained on break until now. 
                    During this time, I found my passion for programming through YouTube videos. 
                    I started learning programming in 2022, overcoming some inconveniences.
                </p>
                <p class="mb-6 sm:mb-3 text-sm text-zinc-400">
                    During my learning journey, I've acquired proficiency in programming languages such as JavaScript, TypeScript, and PHP. 
                    I also have hands-on experience with frameworks such as Vue.js for frontend development, Laravel for backend development, 
                    Bootstrap 5, and Tailwind CSS for styling. Additionally, I'm proficient in using MySQL for databases and Postman for API development. 
                    I also have some familiarity with Node.js, Express.js, React.js, MongoDB, Digital Ocean Droplet servers, and hosting projects using cPanel.
                </p>
            </div>
        </div>
        <div class="w-full text-white lg:w-2/6 h-auto px-6 md:px-16 lg:ps-0 flex justify-start lg:justify-center items-start">
            <div class="w-11/12 sm:w-full lg:w-4/6 h-auto overflow-hidden">
                <h3 class="mb-3 py-3 font-semibold text-xl text-white uppercase tracking-widest border-b-2 border-green-400">
                    Education
                </h3>
                <div class="w-full flex items-center gap-3 lg:gap-2 mb-5">
                    <div class="w-1/12 lg:w-1/6 h-auto">
                        <img src="/behs.png" class="w-full h-auto" alt="behs">
                    </div>
                    <span class="w-5/6 text-xs text-zinc-400">High School Graduate, B.E.H.S (4) Thaketa, Yangon, Myanmar</span>
                </div>
                <div class="w-full flex items-start gap-3 lg:gap-2 mb-5">
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
        <!-- <div class="bg-green-400 w-2/6 h-[50px]">hello</div>
        <div class="w-full border text-white lg:w-2/6 h-auto lg:h-full pe-6 md:pe-16 lg:pe-0 flex justify-start lg:justify-center items-start">
            <div class="w-11/12 border sm:w-1/3 lg:w-4/6 h-auto overflow-hidden">
                hello
            </div>
        </div> -->
    </section>
</template>

<script lang="ts" setup>
defineProps<{
    windowWidth: number,
}>();


</script>