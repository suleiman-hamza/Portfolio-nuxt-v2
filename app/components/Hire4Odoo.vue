<script setup>
import { ArrowUpRight } from "lucide-vue-next"
import Button from "./ui/button/Button.vue";
</script>

<template>
    <section class="border-b border-indigo-300/30">
        <section class="border-x border-indigo-300/30 container py-15 px-4">
            <div class=" mb-4 relative">
                <span class="absolute top-0 left-0 h-full w-1 bg-indigo-500"></span>
                <h2 class="relative text-lg md:text-2xl leading-none text-pretty pl-3">ERP Technical Developer Specialist</h2>
            </div>
            <div class="border-amber-200/60 border p-4 md:p-4 max-w-4xl bg-amber-200/10 text-white">
                <blockquote class="mb-2 md:mb-4 text-2xl md:text-3xl">"Helping businesses showcase their value to the world throught strategic and timeless workflows with ERP Software."</blockquote>
                <!-- <NuxtLink to="/odoo4dev" class="underline flex gap-1 items-center justify-center size-fit leading-0 text-indigo-500"><span>Learn more</span><ArrowUpRight :size="16" /></NuxtLink> -->
                <Button class="rounded-none hover:cursor-pointer text-lg border border-indigo-500/30 hover:border-indigo-500 text-[#dedede]">
                    Learn More
                    <ArrowUpRight />
                </Button>
            </div>
        </section>
    </section>
</template>