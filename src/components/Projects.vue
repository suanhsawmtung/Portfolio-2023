<template>
    <section id="projects" class="w-screen lg:min-h-screen py-28 flex flex-col justify-center bg-slate-950 overflow-x-hidden">
        <Header class="mx-auto !mb-12">
            Some of My Works
        </Header>
        <!-- <div class="w-full border mb-2 text-white px-6 md:px-16 grid lg:grid-cols-2 gap-12 lg:gap-y-20 lg:gap-x-0">
            <div class="w-full lg:min-w-1/2 h-auto text-white bg-red-400">hle</div>
            <div class="w-full lg:min-w-1/2 h-auto text-white bg-green-400">hello</div>
        </div> -->
        <div class="w-full px-6 md:px-16 grid lg:grid-cols-2 gap-12 lg:gap-y-20 lg:gap-x-0">
            <div 
                v-for="project in projects"
                :key="project.id"
                class="w-full lg:min-w-1/2 h-auto text-white"
            >
                <div class="w-full lg:w-5/6 h-[22rem] sm:h-[26rem] lg:h-84 mx-auto shadow-2xl rounded-sm overflow-hidden">
                    <div class="w-full h-1/2 sm:h-3/5 overflow-hidden bg-blue-200 p-3">
                        <img 
                            :src="project.image" alt=""
                            class="w-full h-full object-contain"
                        >
                    </div>
                    <div class="flex flex-col w-full h-1/2 sm:h-2/5 bg-slate-900">
                        <div class="px-2 py-1 flex justify-between items-center">
                            <h1 class="text-lg text-green-400 font-semibold">
                                {{ project.title }}
                            </h1>
                            <div class="flex items-center gap-2">
                                <Tag 
                                    v-if="project.code"
                                    :href="project.code"
                                >
                                    Source Code
                                </Tag>
                                <Tag 
                                    v-if="project.demo"
                                    :href="project.demo"
                                >
                                    Live Demo
                                </Tag>
                            </div>
                        </div>
                        <p class="text-sm text-slate-200 px-2 pt-2">
                            {{ project.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Header from './atoms/Header.vue';
import Tag from './atoms/Tag.vue';
import { projects } from '../data/projects';
</script>

<style scoped>

</style>