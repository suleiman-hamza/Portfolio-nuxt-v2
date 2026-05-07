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
            <div class="flex flex-col gap-4 text-[18px]">
                <NuxtLink to="/blog/viteplus" class="mb-4 size-fit">
                <h4 class="underline text-indigo-400">Vite Plus just landed</h4>
                <p class="text-sm text-indigo-100 mt-1">April 06, 2026</p>
            </NuxtLink>
            <NuxtLink to="/blog/what-is-odoo" class="mb-4 size-fit">
                <h4 class="underline text-indigo-400">What Is Odoo ERP</h4>
                <p class="text-sm text-indigo-100 mt-1">March 29, 2026</p>
            </NuxtLink>
            <NuxtLink to="/blog/multi-tenancy" class="mb-4 size-fit">
                <h4 class="underline text-indigo-400">Multi-Tenancy in SaaS Applications: A Typical Model with Example</h4>
                <p class="text-sm text-indigo-100 mt-1">January 02, 2026</p>
            </NuxtLink>
            <div class="size-fit">
                <h4 class="underline text-indigo-400">Use Nuxt Auth Utils for your Authentication</h4>
                <p class="text-sm text-indigo-100 mt-1">March 22, 2025</p>
            </div>
            </div>
        </section>
    </section>
</template>