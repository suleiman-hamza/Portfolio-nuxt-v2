<script setup lang="ts">
useSeoMeta({
    title: 'Blog: VitePlus just Landed',
    titleTemplate: '%s • Suleiman Hamza',
    publisher: 'Suleiman Hamza - Odoo Technical Developer',
    twitterCard: 'summary_large_image',
    ogType: 'article',
    articleAuthor: ['Suleiman Hamza'],
    articleSection: 'Vite+ Tutorials',
    articleTag: ['nuxt', 'vite', 'viteplus', 'vite+', 'vue', 'bunder', 'toolchain'],
    articlePublishedTime: '2026-04-05T00:00:00Z',
    articleModifiedTime: '2026-04-05T00:00:00Z'
})
definePageMeta({
    layout: 'blog-pages'
})

const article = ref({
    title: 'Vite Plus just landed',
    description: 'Article description',
    postedOn: '2026-04-05T00:00:00Z'
})

const articleToc = ref([
    'What is Vite',
    'Vite as Runtime & Package Manager',
    'Performance',
    'Benefits',
])

useSchemaOrg([
    defineArticle({
        headline: () => article.value.title,
        description: () => article.value.description,
    })
])
</script>

<template>
    <div class="container">
        <BlogHeader :title="article.title" :posted-on="article.postedOn" />
        <main class="py-4 border-b border-gray-300/50 border-dashed">
            <ContentOfTable :source="articleToc" />
            <div>
                <section>
                    <h2 class="mt-4 text-indigo-400 text-lg font-semibold">What is <nuxt-link class="underline"
                            to="https://viteplus.dev/" target="_blank">Vite+</nuxt-link> ?</h2>
                    <p>Powered by Vite & Rolldown, Vite+ (French word for "quick", pronounced <span class="code">/viːt +/</span> like "veet plus")
                        is a Unified Toolchain for the Web to Manage your runtime, package manager, and frontend stack
                        with one tool. Free and open source under the MIT license.</p>
                    <h2 class="mt-4 text-indigo-400 text-lg font-semibold">Manages your runtime and package manager</h2>
                    <p>Use node automatically, with the right package manager selected for every project. But you are
                        free to switch through <span class="code">pnpm</span> <span class="code">npm</span> <span
                            class="code">yarn</span> & <span class="code">bun</span></p>
                    <h2 class="mt-4 text-indigo-400 text-lg font-semibold">Simplifies everyday development</h2>
                    <p>With one configuration file and you can use one consistent flow of commands across your whole
                        stack.</p>
                    <p class="flex gap-2 flex-wrap">
                        <span class="code">vp env</span>
                        <span class="code">vp install</span>
                        <span class="code">vp dev</span>
                        <span class="code">vp check</span>
                        <span class="code">vp build</span>
                        <span class="code">vp run</span>
                    </p>
                    <p>A trusted stack to standardize on
                        Vite+ is built on established open source industry standards, and maintained by the same experts
                        behind these projects - </p>
                    <p class="flex gap-2 flex-wrap">
                        <span class="code">Vite</span>
                        <span class="code">Vitest</span>
                        <span class="code">Oxc</span>
                    </p>
                    <p>With low-level components written in Rust, Vite+ delivers enterprise-scale performance: up to 40× faster builds than webpack, ~50× to ~100× faster linting than ESLint, and up to 30× faster formatting than Prettier.</p>
                    <h2 class="mt-4 text-indigo-400 text-lg font-semibold">Benefits</h2>
                    <p>Vite+ unifies your entire web development workflow into a single, powerful command-line interface. 40× faster production build than webpack, Stop wasting time on tooling maintenance & Improve cross-team developer mobility</p>
                </section>
            </div>
        </main>
    </div>
</template>