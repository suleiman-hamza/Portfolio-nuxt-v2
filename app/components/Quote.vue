<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
</script>

<template>
    <section class="bg-[#202020] text-white p-8 sm:p-12 rounded-md quote-body">
        <blockquote class="text-2xl sm:text-4xl text-sky-600 !mb-4 w-[80%]">"Only staying active will want to make you live a hundred years"</blockquote>
        <span class="font-italic text-[#dedede]">Japanese Proverb</span>
        <Quote class="absolute top-[-30px] right-[20px]" :size="90" color="red"/>
    </section>
</template>

<style lang="css" scoped>
.quote-body {
    position: relative;
}
</style>