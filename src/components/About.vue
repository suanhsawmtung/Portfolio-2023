<template>
    <section id="about" class="w-screen pt-28 sm:pb-28 pb-6s lg:min-h-screen flex flex-col flex-wrap lg:flex-row justify-between gap-8 lg:gap-0 lg:gap-y-5 bg-[#030712] overflow-x-hidden">
        <div class="w-full lg:w-2/6 h-auto lg:h-full ps-6 md:ps-16 lg:ps-0 flex justify-start lg:justify-center items-start">
            <div class="w-11/12 sm:w-1/3 lg:w-4/6 h-auto overflow-hidden rounded-lg">
                <img src="../assets/portfolio-about.jpg" class="w-full h-auto" alt="about">
            </div>
        </div>
        <div class="w-full lg:w-4/6 lg:h-full flex items-start">
            <div class="w-full px-6 md:ps-16 lg:ps-0 md:pe-16 text-white">
                <Header
                    v-if="windowWidth < 1240"
                >
                    Who am I? As I mentioned above, my name is Suanh Sawm Tung.
                </Header>
                <Header v-else>
                    About Me!
                </Header>
                <Description>
                    I'm Chin, one of Myanmar's ethnic groups, and I understand that my name can be a bit tricky to pronounce.
                    For simplicity, you can call me Augustine, which is my Christian name. I'm 24 years old and currently reside in Yangon.
                    Professionally, I'm a full-stack web developer with over one year of hands-on experience. 
                    I have a strong affinity for working with Laravel and Vue.js. 
                </Description>
                <Description>
                    I finished my matriculation exam in 2015 and began studying Petroleum Engineering at Technological University (Thanlyin). 
                    In 2020, I took a break from university due to COVID-19, and I have remained on break until now. 
                    During this time, I found my passion for programming through YouTube videos. 
                    I started learning programming in 2022, overcoming some inconveniences.
                </Description>
                <Description>
                    In my free time, I enjoy watching YouTube videos, particularly programming channels, which often inspire project ideas. 
                    I'm passionate about socializing and spending time with friends, creating memorable experiences together. 
                    Additionally, I have an intermediate level of proficiency in English and obtained JLPT N4 certification in Japanese in 2023.
                </Description>
            </div>
        </div>
        <div class="w-full text-white lg:w-2/6 h-auto px-6 md:px-16 lg:px-0 lg:pe-8 flex justify-start lg:justify-end items-start">
            <div class="w-full lg:w-5/6 h-auto overflow-hidden">
                <sub-header>Education</sub-header>
                <div 
                    v-for="step in educationSteps"
                    :key="step.id"
                    :class="`w-full flex ${step.classes} gap-3 lg:gap-2 mb-5`"
                >
                    <div class="w-1/12 lg:w-1/6 h-auto">
                        <img :src="step.image" class="w-full h-auto" alt="">
                    </div>
                    <sub-description class="w-5/6">
                        {{ step.info }}
                    </sub-description>
                </div>
            </div>
        </div>
        <div class="w-full text-white lg:w-2/6 h-auto px-6 md:px-16 lg:px-0 lg:pe-8 flex justify-start items-start">
            <div class="w-full h-auto overflow-hidden">
                <sub-header>Experiences</sub-header>
                <div 
                    v-for="experience in experiences"
                    :key="experience.id"
                    class="w-full flex items-start gap-3 lg:gap-2 mb-5"
                >
                    <div class="w-2/12 lg:w-1/6 h-auto">
                        <component 
                            v-if="experience.link"
                            :is="experienceComponents[experience.id]"
                            class="w-full h-auto" 
                        />
                        <img 
                            v-else
                            src="/developer2.png" 
                            class="w-full h-auto"
                        >
                    </div>
                    <div class="w-10/12 lg:w-5/6 flex flex-col justify-start">
                        <h5 class="text-md font-semibold">
                            {{ experience.title }}
                        </h5>
                        <a 
                            v-if="experience.link"
                            :href="experience.link" 
                            class="text-xs text-zinc-400 mb-2" 
                            target="_blank"
                        >
                            {{ experience.link }}
                        </a>
                        <h5 class="text-xs">{{ experience.position }}</h5>
                        <h5 class="text-xs">
                            {{ experience.type }} - {{ experience.start }} ~ {{ experience.end }} ({{ experience.total }})
                        </h5>
                        <a 
                            v-if="experience.recommendationContent && experience.recommendationLink"
                            :href="experience.recommendationLink" 
                            target="_blank"
                            class="text-xs underline"
                        >
                            {{ experience.recommendationContent }}
                        </a>
                        <sub-description class="mt-2">
                            {{ experience.description }}
                        </sub-description>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full text-white lg:w-2/6 h-auto px-6 md:px-16 lg:px-0 lg:pe-8 flex justify-start items-start">
            <div class="w-full lg:w-5/6 h-auto overflow-hidden">
                <sub-header>Skills</sub-header>
                <div 
                    v-for="(skill, index) in skills" :key="skill.id"
                    class="w-full h-[300px] lg:h-[250px] my-12 lg:my-8 p-2 shadow shadow-green-400 bg-slate-900 border-b-4 border-green-400"
                >
                    <div class="w-full flex flex-col justify-start gap-y-1 items-center sm:pt-2 pb-4 lg:pt-0 lg:pb-3 border-b-[0.5px] border-zinc-400">
                        <component :is="skillComponents[index]" class="text-green-400"></component>
                        <h5 class="text-md font-semibold">
                            {{ skill.title }}
                        </h5>
                    </div>
                    <div class="py-4 lg:py-2">
                        <sub-description space class="mb-5 lg:mb-3">
                            {{ skill.content }}
                        </sub-description>
                        <div class="flex flex-wrap gap-2">
                            <Tag
                                v-for="(tag, index) in skill.tags" 
                                :key="index"
                            >
                                {{ tag }}
                            </Tag>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import CurlyBrackets from './icons/CurlyBrackets.vue';
import Code from './icons/Code.vue';
import Server from './icons/Server.vue';
import CCLogo from './icons/CCLogo.vue';
import Header from './atoms/Header.vue';
import SubHeader from './atoms/SubHeader.vue';
import Description from './atoms/Description.vue';
import SubDescription from './atoms/SubDescription.vue';
import { skills } from '../data/skills';
import { educationSteps } from '../data/education';
import { experiences } from '../data/experiences';
import Tag from './atoms/Tag.vue';

defineProps<{
    windowWidth: number,
}>();

const skillComponents = [
    CurlyBrackets,
    Code,
    Server
];

const experienceComponents = [
    "",
    CCLogo
];

</script>