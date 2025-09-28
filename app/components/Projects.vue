<script setup lang="ts">
import { EllipsisVertical } from 'lucide-vue-next'

const projectData = ref([
    {
        name: 'RovelSub Point',
        tags: ['web app', 'tool', 'pwa']
    },
    {
        name: 'Naira-x',
        tags: ['web app', 'tool', 'pwa']
    },
    {
        name: 'Revel Office',
        tags: ['web app', 'tool', 'pwa', 'e-commerce']
    },
    {
        name: 'Aggr',
        tags: ['web app', 'tool', 'pwa']
    },
    {
        name: 'Mini-Mod',
        tags: ['web app', 'tool', 'pwa']
    },
    {
        name: 'Tooly',
        tags: ['web app', 'tool', 'pwa']
    }
])
</script>

<template>
    <section class="border-bottom">
        <div class="p-4 py-10 container border-x border-[#dedede] bg-rose-100/50"> <!--border-x border-[#dedede]-->

            <CrossedDiv class="size-max p-1 mb-8" as="section">Featured Projects</CrossedDiv>

            <!--selected project cards-->
            
            <div class="mb-4 flex gap-4 overflow-x-auto w-full flex-initial bar pb-2">
                <ProjectCard v-for="proj in projectData" :name="proj.name" :tags="proj.tags"/>
            </div>
            <div class="flex justify-end"><NuxtLink to="/" class="text-sky-500">See Playground</NuxtLink></div>
        </div>
    </section>
</template>

<style scoped>
.tab {
    background: linear-gradient(to right, rgba(124, 252, 134, 0.829), rgba(93, 160, 248, 0.815)); 
}
.bar::-webkit-scrollbar {
    display: none;
}

</style>