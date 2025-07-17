<script setup lang="ts">
const title = 'Blog';

useSeoMeta({
    title,
    description: 'My blog is now live'
})
</script>
<template>
    <section class="border-bottom">
        <b class="h-[58px] block"></b>
        <header class="container border-x border-y p-8 py-16 grid-background">
            <p class="text-4xl">Blog ✨</p>
        </header>
        <main>
            <section class="container border-x border-[#dedede] p-4">
            <div class="mb-4">
                <h4 class="underline text-sky-600">Use Nuxt Auth Utils for your Authentication</h4>
                <p class="text-sm mt-1">June 22, 2025</p>
            </div>
            <div class="mb-4">
                <h4 class="underline text-sky-600">Use Nuxt Auth Utils for your Authentication</h4>
                <p class="text-sm mt-1">June 02, 2025</p>
            </div>
            <div class="mb-4">
                <h4 class="underline text-sky-600">Use Nuxt Auth Utils for your Authentication</h4>
                <p class="text-sm mt-1">March 22, 2025</p>
            </div>
        </section>
        </main>
    </section>
</template>