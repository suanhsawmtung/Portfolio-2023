<template>
    <div 
        :class="`w-full flex ${step.classes} gap-3 lg:gap-2 mb-5`"
    >
        <div class="w-1/12 lg:w-1/6 h-auto">
            <img :src="step.image" class="w-full h-auto" alt="">
        </div>
        <sub-description class="w-5/6">
            {{ step.info }}
        </sub-description>
    </div>
</template>

<script setup lang="ts">
import SubDescription from '../atoms/SubDescription.vue';
import { Step } from '../../data/education';

defineProps<{
    step: Step
}>();
</script>