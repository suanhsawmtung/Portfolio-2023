<template>
    <section id="projects" class="w-screen lg:min-h-screen py-28 flex flex-col justify-center bg-slate-950 overflow-x-hidden">
        <Header class="mx-auto !mb-12">
            Some of My Works
        </Header>
        <div class="w-full px-6 md:px-16 grid lg:grid-cols-2 gap-12 lg:gap-y-20 lg:gap-x-0">
           <ProjectCard
                v-for="project in projects"
                :key="project.id"
                :project="project"
           />
        </div>
    </section>
</template>

<script setup lang="ts">
import Header from './atoms/Header.vue';
import { projects } from '../data/projects';
import ProjectCard from './common/ProjectCard.vue';
</script>
