<template>
    <a 
        v-if="href"
        :href="href" 
        target="_blank"
        :class="tagClass"
    >
        <slot />
    </a >
    <span
        v-else
        :class="tagClass"
    >
        <slot />
    </span>
</template>

<script setup lang="ts">
defineProps<{
    href?: string
}>();

const tagClass = "px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg";

</script>