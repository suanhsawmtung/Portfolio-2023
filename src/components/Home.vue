<template>
    <section id="home" class="2xl:max-w-[1440px] min-h-screen flex items-end sm:items-center lg:items-end 2xl:items-center px-6 md:px-16 bg-slate-950">
        <div class="w-full h-full text-white mt-36 mb-28">
            <h1 class="mb-2 sm:mb-6 font-extrabold flex flex-col gap-4">
                <span class="text-lg">Hi, my name is </span>
                <span class="text-green-400 text-4xl sm:text-6xl">Suanh Sawm Tung</span>
            </h1>
            <h3 class="mb-6 sm:mb-8 font-bold text-4xl sm:text-6xl text-zinc-400 shadow">
                An enthusiastic frontend and backend developer who loves creating scalable web applications.
            </h3>
            <Description class="w-full lg:w-1/2 !mb-12 !text-lg">
                Currently, I am actively seeking employment opportunities 
                that can provide both valuable experience and income.Please feel free to explore my portfolio 
                to learn more about me.
            </Description>
            <Button href="#contact">Contact Me!</Button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import Button from './atoms/Button.vue';
import Description from './atoms/Description.vue';

</script>


