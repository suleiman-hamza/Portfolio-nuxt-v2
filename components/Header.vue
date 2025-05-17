<script setup lang="ts">
const count = ref(1)
</script>
<template>
    <section class="border-bottom">
        <nav class="flex justify-between p-2 container">
            <span class="logo">
                <h2>SH</h2>
            </span>
            
            <ul class="flex hidden">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/">About</NuxtLink></li>
                <li><NuxtLink to="/">Work</NuxtLink></li>
                <li><NuxtLink to="/">Articles</NuxtLink></li>
                <li><NuxtLink to="/">Github</NuxtLink></li>
            </ul>
        </nav>
    </section>
</template>