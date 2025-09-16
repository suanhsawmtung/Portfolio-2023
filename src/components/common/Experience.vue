<template>
  <div class="w-full flex items-start gap-3 lg:gap-2 mb-6">
    <div class="w-2/12 lg:w-1/6 h-auto">
      <a
        :href="experience.link"
        v-if="experience.link"
        target="_blank"
        class="w-full h-auto"
      >
        <component
          :is="experienceComponents[experience.id - 1]"
          class="w-full h-auto transform transition duration-300 hover:-rotate-2 hover:scale-95"
        />
      </a>
      <img v-else src="/developer2.png" class="w-full h-auto" />
    </div>
    <div
      class="w-10/12 lg:w-5/6 flex flex-col justify-start"
      :class="[experience.title === 'Freelance' ? 'mt-2' : '']"
    >
      <a v-if="experience.link" :href="experience.link" target="_blank">
        <h5 class="text-md font-semibold hover:underline">
          {{ experience.title }}
        </h5>
      </a>
      <h5 v-else class="text-md font-semibold">
        {{ experience.title }}
      </h5>
      <p v-if="experience.location" class="text-xs text-zinc-400">
        {{ experience.location }}
      </p>
      <h5 class="text-xs mt-2">{{ experience.position }}</h5>
      <h5 class="text-xs">
        {{ experience.type }}
        <span v-if="experience.duration">
          - {{ experience.duration.start }} ~ {{ experience.duration.end }} ({{
            experience.duration.total
          }})</span
        >
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
</template>

<script setup lang="ts">
import { Experience } from "../../data/experiences";
import SubDescription from "../atoms/SubDescription.vue";
import CCLogo from "../icons/CCLogo.vue";
import KKGLogo from "../icons/KKGLogo.vue";

defineProps<{
  experience: Experience;
}>();

const experienceComponents = [KKGLogo, CCLogo];
</script>
