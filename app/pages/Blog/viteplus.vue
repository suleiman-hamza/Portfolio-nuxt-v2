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
    'What is VitePlus',
    'Why is Vite+'
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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
            </p>
        </main>
    </div>
</template>