<template>
    <nav 
        v-if="windowWidth < 768"
        class="w-screen fixed left-0 bottom-0 text-white bg-slate-950 
        px-6 py-5 border-t border-slate-800"
    >
        <ul 
            class="w-full flex justify-between items-center text-sm font-semibold 
            text-decoration-none list-none "
        >
            <li :class="{ 'text-green-400': activeLink === 'home'}">
                <a href="#home" class=" w-full h-full flex flex-col items-center">
                    <i class="fa-solid fa-house text-2xl"></i>
                    Home
                </a>
            </li>
            <li :class="{ 'text-green-400': activeLink === 'about'}">
                <a href="#about" class="w-full h-full flex flex-col items-center">
                    <i class="fa-regular fa-user text-2xl"></i>
                    About
                </a>
            </li>
            <li :class="{ 'text-green-400': activeLink === 'projects'}">
                <a href="#projects" class="w-full h-full flex flex-col items-center">
                    <i class="fa-brands fa-codepen text-2xl"></i>
                    Projects
                </a>
            </li>
            <li :class="{ 'text-green-400': activeLink === 'contact'}">
                <a href="#contact" class="w-full h-full flex flex-col items-center">
                    <i class="fa-regular fa-paper-plane text-2xl"></i>
                    Contact
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

defineProps<{
    windowWidth: number
}>();

const activeLink = ref('');

const setActiveLink = (sections: NodeListOf<HTMLElement>) => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 50;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height) activeLink.value = id as string;
    })
}

onMounted(() => {
    const sections = document.querySelectorAll('section') as NodeListOf<HTMLElement>;
    window.addEventListener('scroll', () => {
        setActiveLink(sections);
    });
    setActiveLink(sections);
})

</script>

