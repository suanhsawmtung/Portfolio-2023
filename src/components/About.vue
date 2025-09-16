<template>
  <section
    id="about"
    class="w-screen 2xl:max-w-[1440px] pt-28 sm:pb-28 pb-6 lg:min-h-screen flex flex-col flex-wrap lg:flex-row justify-between gap-8 lg:gap-0 lg:gap-y-5 bg-[#030712] overflow-x-hidden"
  >
    <div
      class="w-full lg:w-2/6 h-auto lg:h-full ps-6 md:ps-16 lg:ps-0 flex justify-start lg:justify-center items-start"
    >
      <div
        class="w-11/12 sm:w-1/3 lg:w-4/6 h-auto overflow-hidden rounded-lg section-observer opacity-0 -translate-x-40 duration-1000"
      >
        <img
          src="../assets/portfolio-about.jpg"
          class="w-full h-auto"
          alt="about"
        />
      </div>
    </div>
    <div class="w-full lg:w-4/6 lg:h-full flex items-start">
      <div class="w-full px-6 md:ps-16 lg:ps-0 md:pe-16 text-white">
        <Header
          v-if="windowWidth < 1240"
          class="section-observer opacity-0 duration-700"
        >
          Who am I? As I mentioned above, my name is Suanh Sawm Tung.
        </Header>
        <Header v-else class="section-observer opacity-0 duration-700">
          About Me!
        </Header>
        <Description
          class="section-observer translate-y-5 opacity-0 duration-700 delay-75"
        >
          I'm Chin, one of Myanmar's ethnic groups, and I understand that my
          name can be a bit tricky to pronounce. For simplicity, you can call me
          Augustine, which is my Christian name. I'm 25 years old and currently
          reside in Yangon. Professionally, I'm a full-stack web developer with
          over one year of hands-on experience. I have a strong affinity for
          working with Laravel and Vue.js.
        </Description>
        <Description
          class="section-observer translate-y-5 opacity-0 duration-700 delay-150"
        >
          I finished my matriculation exam in 2015 and began studying Petroleum
          Engineering at Technological University (Thanlyin). In 2020, I took a
          break from university due to COVID-19, and I have remained on break
          until now. During this time, I found my passion for programming
          through YouTube videos. I started learning programming in 2022,
          overcoming some inconveniences.
        </Description>
        <Description
          class="section-observer translate-y-5 opacity-0 duration-700 delay-200"
        >
          In my free time, I enjoy watching YouTube videos, particularly
          programming channels, which often inspire project ideas. I'm
          passionate about socializing and spending time with friends, creating
          memorable experiences together. Additionally, I have an intermediate
          level of proficiency in English and obtained JLPT N4 certification in
          Japanese in 2023.
        </Description>
      </div>
    </div>
    <div
      class="w-full text-white lg:w-2/6 h-auto px-6 md:px-16 lg:px-0 lg:pe-8 flex justify-start lg:justify-end items-start"
    >
      <div
        class="w-full lg:w-5/6 h-auto overflow-hidden section-observer translate-y-10 opacity-0 duration-1000 delay-75"
      >
        <sub-header>Education</sub-header>
        <Education v-for="step in educationSteps" :key="step.id" :step="step" />
      </div>
    </div>
    <div
      class="w-full text-white lg:w-2/6 h-auto px-6 md:px-16 lg:px-0 lg:pe-8 flex justify-start items-start"
    >
      <div
        class="w-full h-auto overflow-hidden section-observer translate-y-10 opacity-0 duration-1000 delay-150"
      >
        <sub-header>Experiences</sub-header>
        <Experience
          v-for="experience in experiences"
          :key="experience.id"
          :experience="experience"
        />
      </div>
    </div>
    <div
      class="w-full text-white lg:w-2/6 h-auto px-6 md:px-16 lg:px-0 lg:pe-8 flex justify-start items-start"
    >
      <div
        class="w-full lg:w-5/6 h-auto overflow-hidden section-observer translate-y-10 opacity-0 duration-1000 delay-200"
      >
        <sub-header>Skills</sub-header>
        <SkillCard
          v-for="(skill, index) in skills"
          :key="skill.id"
          :skill="skill"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { educationSteps } from "../data/education";
import { experiences } from "../data/experiences";
import { skills } from "../data/skills";
import Description from "./atoms/Description.vue";
import Header from "./atoms/Header.vue";
import SubHeader from "./atoms/SubHeader.vue";
import Education from "./common/Education.vue";
import Experience from "./common/Experience.vue";
import SkillCard from "./common/SkillCard.vue";

defineProps<{
  windowWidth: number;
}>();
</script>

<style scoped>
.section-observer.show {
  transform: translateX(0);
  opacity: 1;
}
</style>
