<template>
    <nav 
        class="w-screen 2xl:max-w-[1440px] 2xl:mx-auto fixed top-0 text-white bg-slate-950 px-6 md:px-16 py-5 z-50
            flex justify-between items-center border-b border-slate-800"
    >
        <div class="w-12 h-12 border-4 border-slate-800 overflow-hidden rounded-full">
            <img src="../../assets/portfolio-logo.jpg" class="w-full h-full object-cover" alt="">
        </div>
        <ul 
            v-if="windowWidth > 768"
            class="w-80 flex justify-between items-center text-sm font-semibold text-decoration-none list-none"
        >
            <li class="hover:scale-125 duration-500">
                <a href="#home" :class="{'text-green-400': activeLink === 'home'}">Home</a>
            </li>
            <li class="hover:scale-125 duration-500">
                <a href="#about" :class="{'text-green-400': activeLink === 'about'}">About</a>
            </li>
            <li class="hover:scale-125 duration-500">
                <a href="#projects" :class="{'text-green-400': activeLink === 'projects'}">Projects</a>
            </li>
            <li class="hover:scale-125 duration-500">
                <a href="#contact" :class="{'text-green-400': activeLink === 'contact'}">Contact</a>
            </li>
        </ul>
        <div class="text-xs sm:text-xl font-bold flex justify-end items-center text-green-400" v-else>
            Code with love and coffee by Augustine...
        </div>
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
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height) activeLink.value = id as string;
    })
}

onMounted(() => {
    const sections = document.querySelectorAll('section') as NodeListOf<HTMLElement>;
    const sectionObservers = document.querySelectorAll('.section-observer') as NodeListOf<HTMLElement>;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting);
            if(entry.isIntersecting) observer.unobserve(entry.target);
        })
    });

    sectionObservers.forEach(sectionObserver => observer.observe(sectionObserver));

    window.addEventListener('scroll', () => {
        setActiveLink(sections);
    });
    setActiveLink(sections);
})

</script>
