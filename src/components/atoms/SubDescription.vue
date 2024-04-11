<template>
    <p class="text-xs text-zinc-400">
        <span v-if="space" class="me-12"></span>
        <slot />
    </p>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    space?: boolean
}>(), {
    space: false
})
</script>