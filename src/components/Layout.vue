<template>
    <main class="flex flex-col items-center">
        <TopNav :windowWidth="windowWidth" />
        <slot />
        <BottomNav :windowWidth="windowWidth" />
    </main>
</template>

<script setup lang="ts">
import TopNav from './common/TopNav.vue';
import BottomNav from './common/BottomNav.vue';

defineProps<{
    windowWidth: number,
}>();

</script>