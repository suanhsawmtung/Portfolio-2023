<template>
    <section id="contact" class="w-screen 2xl:max-w-[1440px] h-screen 2xl:h-[60vh] px-6 md:px-16 bg-[#030712]">
        <div class="w-full h-4/6 md:h-5/6 flex justify-center items-center">
            <div class="w-full lg:w-2/6 text-center">
                <Header class="mx-auto section-observer opacity-0 duration-700"> Contact Me</Header>
                <Description class="!mb-6 section-observer translate-y-5 opacity-0 duration-700 delay-75">
                    You can directly call me with the phone number: +959783312791.
                    Otherwise, you can also send mail by clicking the button below.
                    Let's make things better together more than we could imagine.
                </Description>
                <Button 
                    href="mailto:suanhsawmtung1999@gmail.com" 
                    class="section-observer opacity-0 duration-1000 delay-200"
                >
                    Get in touch!
                </Button>
            </div>
        </div>
        <div class="w-full flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0">
            <ul class="w-56 flex justify-between items-center">
                <li class="section-observer opacity-0 duration-700 delay-300">
                    <a 
                        href="https://github.com/suanhsawmtung/" target="_blank"
                        class="text-white text-decoration-none outline-none"
                    >
                        <i class="fa-brands fa-github text-3xl hover:text-green-400"></i>
                    </a>
                </li>
                <li class="section-observer opacity-0 duration-700 delay-200">
                    <a 
                        href="https://www.linkedin.com/in/suanhsawmtung/" target="_blank"
                        class="text-white text-decoration-none outline-none"
                    >
                        <i class="fa-brands fa-linkedin text-3xl hover:text-green-400"></i>
                    </a>
                </li>
                <li class="section-observer opacity-0 duration-700 delay-150">
                    <a 
                        href="https://www.facebook.com/augustine.kyawthet" target="_blank"
                        class="text-white text-decoration-none outline-none"
                    >
                        <i class="fa-brands fa-facebook text-3xl hover:text-green-400"></i>
                    </a>
                </li>
                <li class="section-observer opacity-0 duration-700">
                    <a 
                        href="https://www.instagram.com/joy_boy_sst/" target="_blank"
                        class="text-white text-decoration-none outline-none"
                    >
                        <i class="fa-brands fa-instagram text-3xl hover:text-green-400"></i>
                    </a>
                </li>
            </ul>
            <h3 class="text-zinc-400 text-sm md:text-md section-observer translate-x-40 opacity-0 duration-700">
                © 2023 Suanh Sawm Tung. All rights reserved.
            </h3>
        </div>
    </section>
</template>

<script setup lang="ts">
import Header from './atoms/Header.vue';
import Button from './atoms/Button.vue';
import Description from './atoms/Description.vue';


</script>

<style scoped>
.section-observer.show{
    opacity: 1;
    transform: translate(0);
}
</style>