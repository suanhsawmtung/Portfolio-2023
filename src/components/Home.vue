
import HeroSvg from './icons/HeroSvg.vue';
<template>
    <section id="home" class="w-screen lg:h-screen px-6 md:px-16 flex flex-col lg:flex-row justify-between bg-slate-950 overflow-x-hidden">
        <div class="w-full lg:w-1/2 h-[30rem] sm:h-[34rem] lg:h-full flex items-center sm:items-center lg:items-center">
            <div class="w-full text-white">
                <h1 class="mb-2 sm:mb-4 font-extrabold flex flex-col gap-1 sm:block">
                    <span class="text-sm sm:text-5xl">Hi, I'm </span>
                    <span class="text-green-400 text-3xl sm:text-5xl">Suanh Sawm Tung,</span>
                </h1>
                <h3 class="mb-2 sm:mb-5 font-bold text-xl sm:text-3xl text-white">
                    A <span class="text-green-400">Full-stack Developer</span>
                </h3>
                <p class="text-zinc-400 mb-8 text-sm sm:text-md">
                    If you find it challenging to pronounce my name, you can simply call me Augustine.
                    I am deeply committed to pursuing a career in programming. Currently, my passion lies in 
                    developing full-stack web applications, and I am actively seeking employment opportunities 
                    that can provide both valuable experience and income.Please feel free to explore my portfolio 
                    to learn more about me.
                </p>
                <a 
                    href="#contact"
                    class="px-6 py-4 bg-green-400 text-slate-950 tracking-wider rounded-lg"
                >
                    Contact Me!
                </a>
            </div>
        </div>
        <div class="w-full lg:w-1/2 h-96 sm:h-[30rem] lg:h-full flex justify-center lg:justify-end items-end sm:items-center order-first sm:order-last">
            <div class="w-full md:w-4/6 h-auto">
                <!-- <img src="../assets/portfolio-home.svg" class="w-full h-auto" alt="home"> -->
                <HeroSvg class="w-full h-auto" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import HeroSvg from './icons/HeroSvg.vue';

</script>


