<template>
    <div 
        class="w-full h-[300px] lg:h-[250px] my-12 lg:my-8 p-2 shadow shadow-green-400 bg-slate-900 border-b-4 border-green-400"
    >
        <div class="w-full flex flex-col justify-start gap-y-1 items-center sm:pt-2 pb-4 lg:pt-0 lg:pb-3 border-b-[0.5px] border-zinc-400">
            <component :is="skillComponents[index]" class="text-green-400"></component>
            <h5 class="text-md font-semibold">
                {{ skill.title }}
            </h5>
        </div>
        <div class="py-4 lg:py-2">
            <sub-description space class="mb-5 lg:mb-3">
                {{ skill.content }}
            </sub-description>
            <div class="flex flex-wrap gap-2">
                <Tag
                    v-for="(tag, index) in skill.tags" 
                    :key="index"
                >
                    {{ tag }}
                </Tag>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CurlyBrackets from '../icons/CurlyBrackets.vue';
import Code from '../icons/Code.vue';
import Server from '../icons/Server.vue';
import Tag from '../atoms/Tag.vue';
import SubDescription from '../atoms/SubDescription.vue';
import { Skill } from '../../data/skills';

defineProps<{
    skill: Skill,
    index: number
}>();

const skillComponents = [
    CurlyBrackets,
    Code,
    Server
];

</script>