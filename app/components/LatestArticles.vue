<script setup lang="ts">
import { Book } from 'lucide-vue-next'
</script>

<template>
    <section class="border-b border-gray-300/50">
        <section class="container border-x border-gray-300/50 p-4 py-10">
            <CrossedDiv class="size-max p-1 mb-6">
                <span class="">Recent from the blog</span>
                <Book :size="16" />
            </CrossedDiv>
            <div class="mb-4">
                <h4 class="underline text-sky-600">Use Nuxt Auth Utils for your Authentication</h4>
                <p class="text-sm mt-1">June 22, 2025</p>
            </div>
            <NuxtLink to="/Blog/multi-tenancy" class="mb-4">
                <h4 class="underline text-sky-600">Multi-Tenancy in SaaS Applications: A Typical Model with Example</h4>
                <p class="text-sm mt-1">January 02, 2026</p>
            </NuxtLink>
            <div class="mb-4">
                <h4 class="underline text-sky-600">Use Nuxt Auth Utils for your Authentication</h4>
                <p class="text-sm mt-1">March 22, 2025</p>
            </div>
            <div class="mb-4">
                <h4 class="underline text-sky-600">Use Nuxt Auth Utils for your Authentication</h4>
                <p class="text-sm mt-1">March 22, 2025</p>
            </div>
        </section>
    </section>
</template>