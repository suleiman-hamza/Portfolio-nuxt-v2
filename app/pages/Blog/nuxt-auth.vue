<!-- <script setup lang="ts">
definePageMeta({
    layout: 'blog-pages'
})
useSeoMeta({
    title: 'Nuxt Auth Utils For Auth',
    titleTemplate: '%s • Suleiman Hamza',
    publisher: 'Suleiman Hamza - Odoo Technical Developer',
    twitterCard: 'summary_large_image',
    ogType: 'article',
  articleAuthor: ['Suleiman Hamza'],
  articleSection: 'Nuxt',
  articleTag: ['nuxt', 'auth', 'modules',],
  articlePublishedTime: '2026-03-29T00:00:00Z',
  articleModifiedTime: '2026-03-29T00:00:00Z'
})

const article = ref({
    title: 'Nuxt-Auth Utils For Auth',
    description: 'Article description',
    postedOn: '2025-03-22T00:00:00Z'
})

const articleToc = ref([
    'What is Odoo',
    'Odoo Editions',
    'License',
    'Odoo Community Association',
])

useSchemaOrg([
    defineArticle({
        headline: () => article.value.title,
        description: () => article.value.description,
    })
])
</script> -->

<script setup lang="ts">
definePageMeta({
    layout: 'blog-pages'
})
useSeoMeta({
    title: 'Nuxt Auth Utils For Auth',
    titleTemplate: '%s • Suleiman Hamza',
    publisher: 'Suleiman Hamza - Odoo Technical Developer',
    twitterCard: 'summary_large_image',
    ogType: 'article',
  articleAuthor: ['Suleiman Hamza'],
  articleSection: 'Nuxt',
  articleTag: ['nuxt', 'auth', 'modules',],
  articlePublishedTime: '2026-03-29T00:00:00Z',
  articleModifiedTime: '2026-03-29T00:00:00Z'
})

const article = ref({
    title: 'Nuxt-Auth Utils For Auth',
    description: 'Article description',
    postedOn: '2025-03-22T00:00:00Z'
})

const articleToc = ref([
    'What is Odoo',
    'Odoo Editions',
    'License',
    'Odoo Community Association',
])

useSchemaOrg([
    defineArticle({
        headline: () => article.value.title,
        description: () => article.value.description,
    })
])
import { Cloud } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
</script>

<template>
    <main class="mt-(--ui-header) container h-dvh">

        <Empty class="border border-dashed">
            <EmptyHeader>
                <EmptyMedia variant="icon">
        <Cloud />
    </EmptyMedia>
      <EmptyTitle>Unable to Load Blog Page</EmptyTitle>
      <EmptyDescription>
        Please contact me directly for resources on this page
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <NuxtLink class="text-indigo-400 underline" to="/blog" size="sm">
          Back to Blog
      </NuxtLink>
    </EmptyContent>
</Empty>
</main>
</template>
