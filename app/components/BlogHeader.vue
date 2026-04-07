<script setup lang="ts">
const props = defineProps<{
    title: string
    postedOn: string
    updated?: string
}>()
</script>

<template>
    <header class="h-40 border-b border-gray-300/50 border-dashed p-4 grid-background">
            <h4 class="text-[24px] md:text-[32px] font-semibold">{{ props.title }}</h4>
            <h6 class="font-[14px] italic">Posted: {{ postedOn }}</h6>
    </header>
</template>

<style scoped>
.grid-background {
    background-image: linear-gradient(90deg, rgba(246, 246, 246, 0.089) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(rgba(246, 246, 246, 0.075) 1px, rgba(0, 0, 0, 0) 1px);
    background-size: 16px 16px;
}
</style>