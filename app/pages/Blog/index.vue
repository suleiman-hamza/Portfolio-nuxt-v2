<script setup lang="ts">
useSeoMeta({
  title: 'Blog',
  titleTemplate: '%s • Suleiman Hamza',
  ogTitle: 'Blog | Suleiman Hamza',
  ogDescription: 'My Personal Wiki',
  description: 'Learn more about Suleiman Hamza, a skilled Software Engineer and Odoo Technical Developer. Discover his expertise as a Software enginner & Developer.',
//   ogImage: 'https://mysite.com/og.png' IMPLEMENT THIS LATER
twitterCard: 'summary_large_image'
})
const blogList = ref([
    {
        title: 'Vite Plus just Landed!',
        posted: 'April 06, 2026',
        link: 'blog/viteplus' 
        
    },
    {
        title: 'What is Odoo ERP',
        posted: 'March 29, 2026',
        link: 'blog/what-is-odoo' 
        
    },
    {
        title: 'Multi-Tenancy in SaaS Applications: A Typical Model with Example',
        posted: 'January 02, 2026',
        link: 'blog/multi-tenancy' 
        
    },
    {
        title: 'Use Nuxt Auth Utils for your Authentication',
        posted: 'March 22, 2025',
        link: 'blog/nuxt-auth' 
        
    }
])
</script>

<template>
    <section class="mt-(--ui-header) py-6 container">
        <div class="relative p-4 h-30 text-[24px] border border-gray-300/50 flex items-center justify-center mb-4">
            <div class="absolute inset-0 -z-10">
                <div class="absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,#7c86ff_100%)]"></div>
            </div>
            <h2 class="relative z-10 text-white">My Personal Wiki</h2>
        </div>
        <div>Welcome to my personal wiki, I share everything from technical choices to architectural decisions, the tools I use, the links between them, the platforms I rely on, and more.</div>
        <section class="">
            <div v-for="item in blogList" class="py-4 border-b border-gray-300/50">
                <p class="text-sm">{{ item.posted }}</p>
                <NuxtLink :to="item.link" class="">
                    <h4 class="text-indigo-400 font-semibold inline">{{ item.title }}</h4>
                </NuxtLink>
            </div>
            </section>
    </section>
</template>