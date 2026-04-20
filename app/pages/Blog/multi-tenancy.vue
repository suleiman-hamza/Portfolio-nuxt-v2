<script setup lang="ts">
definePageMeta({
    layout: 'blog-pages'
})

useSeoMeta({
    title: 'Blog: Multi-Tenancy in SaaS Applications: A Typical Model with Example',
    titleTemplate: '%s • Suleiman Hamza',
    publisher: 'Suleiman Hamza - Odoo Technical Developer',
    twitterCard: 'summary_large_image',
    ogType: 'article',
  articleAuthor: ['Suleiman Hamza'],
  articleSection: 'Multi-Tenancy Tutorials',
  articleTag: ['nuxt', 'saas', 'multi-tenancy', 'SaaS', 'software-as-a-service', 'cloud computing', 'software architecture'],
  articlePublishedTime: '2026-01-02T00:00:00Z',
  articleModifiedTime: '2026-01-02T00:00:00Z'
})

const title = 'Multi-Tenancy'
const postedOn = 'January 02, 2026'
</script>

<template>
    <div class="container">
        <BlogHeader :title="title" :posted-on="postedOn" />
        <main class="py-4 border-b border-gray-300/50 border-dashed">
            <h2>What is Multi-Tenancy</h2>
            <p>Multi-tenancy is an architecture where a single instance of a software application serves multiple customers (tenants). Each tenant's data is isolated and remains invisible to other tenants, while all tenants share the same infastructure and codebase.</p>
            <div>
                <h2>Typical Multi-Tenancy Model</h2>
                <p>Here's a common implementation pattern for SaaS applications:</p>
                <ul>
                    <li>Shared Infrastructure</li>
                    <li>Shared Application Code</li>
                    <li>Isolated Tenant Data</li>
                </ul>
            </div>
        </main>
    </div>
</template>