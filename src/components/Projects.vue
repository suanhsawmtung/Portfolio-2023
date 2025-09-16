<template>
  <section
    id="projects"
    class="w-screen 2xl:max-w-[1440px] lg:min-h-screen 2xl:min-h-[60vh] py-28 flex flex-col justify-center bg-slate-950 overflow-x-hidden"
  >
    <Header class="mx-auto !mb-12 section-observer opacity-0 duration-700">
      Projects I Contributed To
    </Header>
    <div
      class="w-full px-6 md:px-16 grid lg:grid-cols-2 gap-12 lg:gap-y-20 lg:gap-x-0 section-observer"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="section-observer opacity-0 translate-x-2 translate-y-4 duration-1000"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from "../data/projects";
import Header from "./atoms/Header.vue";
import ProjectCard from "./common/ProjectCard.vue";
</script>

<style scoped>
.section-observer.show {
  opacity: 1;
  transform: translate(0);
}
</style>
