<script setup>
import { ArrowUpRight } from "lucide-vue-next"
</script>

<template>
    <section class="border-b border-gray-300/50">
        <section class="border-x border-gray-300/50 container py-8 px-4">
            <h2 class="text-sm text-pretty mb-4">Odoo Technical Developer specialist</h2>
            <blockquote class="mb-2 md:mb-4 text-2xl md:text-3xl text-muted">"Helping businesses showcase their value to the world throught strategic and timeless workflows with Odoo ERP."</blockquote>
            <NuxtLink to="/odoo4dev" class="underline flex gap-1 items-center justify-center size-fit leading-0"><span>Learn more</span><ArrowUpRight :size="16" /></NuxtLink>
        </section>
    </section>
</template>