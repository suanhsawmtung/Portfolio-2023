<template>
    <section id="projects" class="w-screen lg:min-h-screen py-28 flex flex-col justify-center bg-slate-950 overflow-x-hidden">
        <h1 class="mx-auto mb-12 font-bold text-3xl text-green-400">
            Some of My Works
        </h1>
        <!-- <div class="w-full border mb-2 text-white px-6 md:px-16 grid lg:grid-cols-2 gap-12 lg:gap-y-20 lg:gap-x-0">
            <div class="w-full lg:min-w-1/2 h-auto text-white bg-red-400">hle</div>
            <div class="w-full lg:min-w-1/2 h-auto text-white bg-green-400">hello</div>
        </div> -->
        <div class="w-full px-6 md:px-16 grid lg:grid-cols-2 gap-12 lg:gap-y-20 lg:gap-x-0">
            <div class="w-full lg:min-w-1/2 h-auto text-white ">
                <div class="w-full lg:w-5/6 h-[22rem] sm:h-[26rem] lg:h-84 mx-auto shadow-2xl rounded-sm overflow-hidden">
                    <div class="w-full h-1/2 sm:h-3/5 overflow-hidden bg-blue-200 p-3">
                        <img 
                            src="/vue-shop.png" alt=""
                            class="w-full h-full object-contain"
                        >
                    </div>
                    <div class="flex flex-col w-full h-1/2 sm:h-2/5 bg-slate-900">
                        <div class="px-2 py-1 flex justify-between items-center">
                            <h1 class="text-lg text-green-400 font-semibold">Vue Shop</h1>
                            <div class="flex items-center gap-2">
                                <a 
                                    href="https://github.com/suanhsawmtung/Vue-Ecommerce-Shop" target="_blank"
                                    class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                                >
                                    Source Code
                                </a >
                                <!-- <a 
                                    href="https://vue-ecommerce-shop.netlify.app/" target="_blank"
                                    class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                                >
                                    Live Demo
                                </a> -->
                            </div>
                        </div>
                        <p class="text-sm text-slate-200 px-2 pt-2">
                            An e-commerce web application where customers can browse, add items to their cart, and make purchases. 
                            Set up with Vue, Vite, Typescript, and Tailwind CSS. Uses Vue Router for routing and Pinia for state managment.
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-full h-auto text-white">
                <div class="w-full lg:w-5/6 h-[22rem] sm:h-[28rem] lg:h-84 mx-auto shadow-2xl rounded-sm overflow-hidden">
                    <div class="w-full h-1/2 sm:h-3/5 overflow-hidden bg-blue-200 p-3 ">
                        <img 
                            src="/vue-shop-api.png" alt=""
                            class="w-full h-full object-contain"
                        >
                    </div>
                    <div class="flex flex-col w-full h-1/2 sm:h-2/5 bg-slate-900">
                        <div class="px-2 py-1 flex justify-between items-center">
                            <h1 class="text-lg text-green-400 font-semibold">Vue Shop API</h1>
                            <div class="flex items-center gap-2">
                                <a 
                                    href="https://github.com/suanhsawmtung/Laravel-Ecommerce-Backend" target="_blank"
                                    class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                                >
                                    Source Code
                                </a >
                                <!-- <a 
                                    href="https://vue-ecommerce-shop.netlify.app/" target="_blank"
                                    class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                                >
                                    Live Demo
                                </a> -->
                            </div>
                        </div>
                        <p class="text-sm text-slate-200 px-2 pt-2">
                            A Laravel Project for building RESTful API for Vue Shop Ecommerce Project. 
                            You can find some APIs in the readme file of that GitHub project repository.
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full lg:min-w-1/2 h-auto text-white">
                <div class="w-full lg:w-5/6 h-[22rem] sm:h-[28rem] lg:h-84 mx-auto shadow-2xl rounded-sm overflow-hidden">
                    <div class="w-full h-1/2 sm:h-3/5 overflow-hidden bg-blue-200 p-3 ">
                        <img 
                            src="/weather-app.png" alt=""
                            class="w-full h-full object-contain"
                        >
                    </div>
                    <div class="flex flex-col w-full h-1/2 sm:h-2/5 bg-slate-900">
                        <div class="px-2 py-1 flex justify-between items-center">
                            <h1 class="text-lg text-green-400 font-semibold">Weather App</h1>
                            <div class="flex items-center gap-2">
                                <a 
                                    href="https://github.com/suanhsawmtung/Vue-Typescript-Weather-App" target="_blank"
                                    class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                                >
                                    Source Code
                                </a >
                                <a 
                                    href="https://vue-typescript-weather-app.netlify.app/" target="_blank"
                                    class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                        <p class="text-sm text-slate-200 px-2 pt-2">
                            I built that weather app by using Vue.js, Typescript and Open Weather Api. You can find the weather of a city
                            by typing from search bar. Sometimes, Vpn might be need to call weather api.
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full lg:min-w-1/2 h-auto text-white">
                <div class="w-full lg:w-5/6 h-[22rem] sm:h-[28rem] lg:h-84 mx-auto shadow-2xl rounded-sm overflow-hidden">
                    <div class="w-full h-1/2 sm:h-3/5 overflow-hidden bg-blue-200 p-3 ">
                        <img 
                            src="/creative-coder-myanmar.png" alt=""
                            class="w-full h-full object-contain"
                        >
                    </div>
                    <div class="flex flex-col w-full h-1/2 sm:h-2/5 bg-slate-900">
                        <div class="px-2 py-1 flex justify-between items-center">
                            <h1 class="text-lg text-green-400 font-semibold">Creative Coder Myanmar</h1>
                            <div class="flex items-center gap-2">
                                <!-- <a 
                                    href="https://github.com/suanhsawmtung/Vue-Typescript-Weather-App" target="_blank"
                                    class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                                >
                                    Source Code
                                </a > -->
                                <a 
                                    href="https://creativecodermm.com/" target="_blank"
                                    class="px-2 py-1 text-white bg-slate-800 border border-green-400 text-xs shadow-lg"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                        <p class="text-sm text-slate-200 px-2 pt-2">
                            I am proud to have contributed to the development of the Creative Coder Myanmar Learning Platform.
                            During my eight-month tenure at the Creative Coder Myanmar Learning Platform, I served as a Laravel Vue.js developer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>