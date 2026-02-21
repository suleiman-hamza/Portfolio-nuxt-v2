<script setup lang="ts">

const projectData = ref([
    {
        name: 'RovelSub Point',
        tags: ['web app', 'tool', 'pwa']
    },
    {
        name: 'Naira-x',
        tags: ['web app', 'tool', 'pwa', 'web 3']
    },
    {
        name: 'Revel Office',
        tags: ['web app', 'tool', 'pwa', 'e-commerce']
    },
    {
        name: 'Aggr',
        tags: ['web app', 'tool',]
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
    <section class="border-b border-gray-300/50">
        <div class="p-4 py-10 container border-x border-gray-300/50 bg-background">
            <CrossedDiv class="size-max p-1 mb-8" as="section">Featured Projects</CrossedDiv>
        </div>
    </section>
</template>

<style scoped>
</style>