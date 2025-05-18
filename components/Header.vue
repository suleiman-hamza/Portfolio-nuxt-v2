<script setup lang="ts">
const count = ref(1)
</script>
<template>
    <section class="border-bottom">
        <nav class="flex justify-between py-[17px] px-[24px] border-x border-[#dedede] container">
            <span class="logo">
                <h2>SH</h2>
            </span>
            
            <ul class="flex gap-4">
                <li class="bg-blue-400"><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/">About</NuxtLink></li>
                <li><NuxtLink to="/">Work</NuxtLink></li>
                <li><NuxtLink to="/">Articles</NuxtLink></li>
                <li><NuxtLink to="/">Github</NuxtLink></li>
            </ul>
        </nav>
    </section>
</template>