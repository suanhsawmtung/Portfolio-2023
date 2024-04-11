<template>
    <a 
        v-if="href"
        :href="href"
        class="px-6 py-4 bg-green-400 text-slate-950 tracking-wider rounded-lg"
    >
        <slot />
    </a>
    <button
        v-else
        class="px-6 py-4 bg-green-400 text-slate-950 tracking-wider rounded-lg"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps<{
    href: string | null,
}>();
</script>