<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
</script>

<template>
    <section class="bg-[#141414] text-white flex flex-col gap-4 items-start sm:items-center justify-center h-40 p-4 sm:p-8 border-t border-dotted border-rose-100/50">
        <blockquote class="text-rose-200 text-1xl sm:text-2xl">"Only staying active will want to make you live a hundred years"</blockquote>
        <div class="flex gap-2 items-center">
            <NuxtImg src="/images/avatar1.png" class="w-8" />
            <span class="font-italic text-[#dedede]">Japanese Proverb</span>
        </div>
        <!-- <Quote class="absolute top-[-30px] right-[20px]" :size="90" color="red"/> -->
    </section>
</template>

<style lang="css" scoped>
</style>