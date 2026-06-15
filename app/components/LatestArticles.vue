<script setup lang="ts">
import { Book } from 'lucide-vue-next'
</script>

<template>
    <section class="border-b border-indigo-300/30">
        <section class="container border-x border-indigo-300/30 p-4 py-20">
            <CrossedDiv crossx="after:bg-indigo-300" crossy="before:bg-indigo-300" class="align-center mx-auto size-max p-2 mb-4">
                    Recent from the blog
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