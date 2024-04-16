<template>
    <section id="home" class="w-screen px-6 flex flex-col justify-between bg-slate-950 overflow-x-hidden">
        <div class="w-full h-[30rem] flex items-center">
            <div class="w-full text-white">
                <h1 class="mb-4 font-extrabold flex flex-col gap-1">
                    <span class="text-sm">Hi, my name is </span>
                    <span class="text-green-400 text-4xl">Suanh Sawm Tung,</span>
                </h1>
                <h3 class="mb-4 font-bold text-2xl text-white">
                    A <span class="text-green-400">Full-stack Developer</span>
                </h3>
                <Description class="!mb-10">
                    I am an enthusiastic frontend and backend developer who loves creating scalable web applications.
                    Currently, I am actively seeking employment opportunities 
                    that can provide both valuable experience and income.Please feel free to explore my portfolio 
                    to learn more about me.
                </Description>
                <Button href="#contact">Contact Me!</Button>
            </div>
        </div>
        <div class="w-full h-96 flex justify-center items-end order-first">
            <div class="w-full h-auto">
                <HeroSvg class="w-full h-auto" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import HeroSvg from './icons/HeroSvg.vue';
import Button from './atoms/Button.vue';
import Description from './atoms/Description.vue';

</script>