<template>
    <nav 
        class="w-screen fixed top-0 left-0 text-white bg-slate-950 px-6 md:px-16 py-5
            flex justify-between items-center border-b border-slate-800"
    >
        <div class="w-12 h-12 border-4 border-slate-800 hover:border-green-400 overflow-hidden rounded-full">
            <img src="../assets/portfolio-logo.jpg" class="w-full h-full object-cover" alt="">
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
        <div class="w-12 h-12 flex justify-end items-center" v-else>
            <i class="fa-solid fa-bars text-white text-3xl"></i>
        </div>
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