<script setup lang="ts">
defineProps<{
    defaultClass?: string
}>()
</script>

<template>
    <button :class="defaultClass || 'flex gap-2 items-center px-4 py-2 text-white bg-[#202020]'">
        <slot />
    </button>
</template>