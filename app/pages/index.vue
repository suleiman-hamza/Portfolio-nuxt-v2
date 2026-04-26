<script setup lang="ts">
useSeoMeta({
  title: 'Software Engineer Portfolio',
  titleTemplate: '%s • Suleiman Hamza',
  ogTitle: 'Suleiman Hamza - Software Engineer',
  ogDescription: 'An independent creative developer pursuing standout solutions that are meaningful, secure & scalable',
  description: 'Passionate Vue and Nuxt developer crafting seamless web experiences and delivering tailored ERP implementations to drive business success. A vue developer. A nuxt developer',
  ogImage: 'https://shshunt.vercel.app/images/suleiman-hamza-headshot.webp',
twitterCard: 'summary_large_image'
})

defineOgImage('MyTemplate.takumi', {
  title: 'Suleiman Hamza - Frontend Engineer'
})

// definePageMeta({
//     layout: 'default'
// })
</script>

<template>
    <HeroSection />
    <Background />
    <Projects />
    <!-- <Stack /> -->
    <LatestArticles />
    <!-- <Clients /> -->
    <Contact />
    <Hire4Odoo />
</template>