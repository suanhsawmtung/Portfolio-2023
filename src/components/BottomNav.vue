<template>
    <nav 
        v-if="windowWidth < 768"
        class="w-screen fixed left-0 bottom-0 text-white bg-slate-950 
        px-6 py-5 border-t border-slate-800"
    >
        <ul 
            class="w-full flex justify-between items-center text-sm font-semibold 
            text-decoration-none list-none flex justify-between items-center"
        >
            <li :class="{ 'text-green-400': activeLink === 'home'}">
                <a href="#home" class="inline-block w-full h-full flex flex-col items-center">
                    <i class="fa-solid fa-house text-2xl"></i>
                    Home
                </a>
            </li>
            <li :class="{ 'text-green-400': activeLink === 'about'}">
                <a href="#about" class="inline-block w-full h-full flex flex-col items-center">
                    <i class="fa-regular fa-user text-2xl"></i>
                    About
                </a>
            </li>
            <li :class="{ 'text-green-400': activeLink === 'projects'}">
                <a href="#projects" class="inline-block w-full h-full flex flex-col items-center">
                    <i class="fa-brands fa-codepen text-2xl"></i>
                    Projects
                </a>
            </li>
            <li :class="{ 'text-green-400': activeLink === 'contact'}">
                <a href="#contact" class="inline-block w-full h-full flex flex-col items-center">
                    <i class="fa-regular fa-paper-plane text-2xl"></i>
                    Contact
                </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">

interface hello {
    activeLink: string | null
}

export default{
    data(): hello {
        return {
            activeLink: ''
        }
    },
    props: {
        windowWidth: {
            type: Number,
            required: true
        }
    },
    mounted() {
        const sections = document.querySelectorAll('section') as NodeListOf<HTMLElement>;
        window.addEventListener('scroll', () => {
            sections.forEach(section => {
                let top = window.scrollY;
                let offset = section.offsetTop - 150;
                let height = section.offsetHeight;
                let id = section.getAttribute('id');

                if(top >= offset && top < offset + height) 
                    this.activeLink = id;
            })
        });
    },
}

</script>

<style scoped>

</style>