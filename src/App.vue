<script setup lang="ts">
import Home from './components/Home.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Layout from './components/Layout.vue';
import MobileHome from './components/MobileHome.vue';
import { ref } from 'vue';

const windowWidth = ref<number>(window.innerWidth);

window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
});


</script>

<template>
  <Layout :windowWidth="windowWidth">
    <Home v-if="windowWidth > 640" />
    <MobileHome v-else  />
    <About :windowWidth="windowWidth" />
    <Projects />
    <Contact />
  </Layout>
</template>

