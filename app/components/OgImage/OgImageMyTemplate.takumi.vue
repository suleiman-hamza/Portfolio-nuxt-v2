<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-gray-900 to-blue-900 text-white p-12">
    <h1 class="text-6xl font-bold mb-4 shadow-lg">
      {{ title }}
    </h1>
    <p v-if="description" class="text-2xl text-gray-400">
      {{ description }}
    </p>
  </div>
</template>
