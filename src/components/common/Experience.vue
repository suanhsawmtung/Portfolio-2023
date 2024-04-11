<template>
    <div 
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
        <div 
            class="w-10/12 lg:w-5/6 flex flex-col justify-start"
            :class="[experience.title === 'Freelance' ? 'mt-2' : '' ]"
        >
            <h5 class="text-md font-semibold">
                {{ experience.title }}
            </h5>
            <a 
                v-if="experience.link"
                :href="experience.link" 
                class="text-xs text-zinc-400" 
                target="_blank"
            >
                {{ experience.link }}
            </a>
            <h5 class="text-xs mt-2">{{ experience.position }}</h5>
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
</template>

<script setup lang="ts">
import CCLogo from '../icons/CCLogo.vue';
import SubDescription from '../atoms/SubDescription.vue';
import { Experience } from '../../data/experiences';

defineProps<{
    experience: Experience
}>();

const experienceComponents = [
    "",
    CCLogo
];

</script>