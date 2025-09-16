<template>
  <div class="w-full lg:min-w-1/2 h-auto text-white">
    <div
      class="w-full lg:w-5/6 h-[22rem] sm:h-[26rem] lg:h-84 mx-auto shadow-2xl rounded-sm overflow-hidden"
    >
      <div class="w-full h-1/2 sm:h-3/5 overflow-hidden bg-blue-200 p-3">
        <img :src="project.image" alt="" class="w-full h-full object-contain" />
      </div>
      <div class="flex flex-col w-full h-1/2 sm:h-2/5 bg-slate-900">
        <div class="px-2 py-1 flex justify-between items-center">
          <h1 class="text-lg text-green-400 font-semibold">
            {{ project.title }}
          </h1>
          <div class="flex items-center gap-2">
            <Tag
              v-for="data in project.links"
              :key="data.title"
              :href="data.link"
            >
              {{ data.title }}
            </Tag>
          </div>
        </div>
        <p class="text-sm text-slate-200 px-2 pt-2">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from "../../data/projects";
import Tag from "../atoms/Tag.vue";

defineProps<{
  project: Project;
}>();
</script>
