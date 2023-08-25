<script setup lang="ts">
import TopNav from './components/TopNav.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import BottomNav from './components/BottomNav.vue';

import { ref } from 'vue';

const windowWidth = ref<number>(window.innerWidth);

window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
});


</script>

<template>
  <TopNav :windowWidth="windowWidth" />
  <BottomNav :windowWidth="windowWidth" />
  <Home />
  <About :windowWidth="windowWidth" />
  <Projects />
  <Contact />
</template>

<style scoped>
</style>
