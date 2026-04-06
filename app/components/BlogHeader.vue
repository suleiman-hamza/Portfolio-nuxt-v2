<script setup lang="ts">
const props = defineProps<{
    title: string
    postedOn: string
    updated?: string
}>()
</script>

<template>
    <header class="h-40 border-b py-4">
            <h4 class="text-[18px] md:text-[24px] font-semibold">{{ props.title }}</h4>
            <h6 class="font-[14px] italic">Posted: {{ postedOn }}</h6>
    </header>
</template>