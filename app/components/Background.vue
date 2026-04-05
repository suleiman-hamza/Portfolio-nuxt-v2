<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

</script>

<template>
    <section class="border-b border-gray-300/50">
        <div class="grid gap-8 sm:grid-cols-2 p-4 py-10 container border-gray-300/50 bg-foreground border-x">
            <div class="min-h-75 bg-cover bg-center bg-[url(/images/8pattern-bg.png)]">

            </div>
            <div class="max-w-2xl">
                <CrossedDiv class="align-center mx-auto size-max p-2 mb-4">
                    Background
                </CrossedDiv>
                <p class="text-md text-base sm:text-xl text-pretty leading-8">Hello, My name is Suleiman Hamza Suleiman
                    (shs). I am a detail-oriented, design-driven and passionate developer with strong problem solving & technical expertise. I thrive in building scalable
                    software applications, integrating complex systems and leveragings
                    modern development tools and practices.</p>
                <NuxtLink to="/about"
                    class="text-sky-500 underline flex gap-1 items-center justify-center size-fit leading-0 transition-all duration-200 mt-4">
                    <span class="">More About Me</span>
                    <ArrowUpRight :size="16" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped></style>