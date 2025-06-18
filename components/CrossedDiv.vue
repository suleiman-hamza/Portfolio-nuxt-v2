<script setup lang="ts">
const { as = 'div', border = 'border-zinc-200/40', crossy = 'before:bg-[#2b7fff]', crossx = 'after:bg-[#2b7fff]' } = defineProps<{
  as?: string
  border?: string
  crossx?: string
  crossy?: string
}>()

</script>

<template>
  <component :is="as" class="relative -mb-px -ml-px border" :class="[border]">
    <span class="absolute -bottom-px -left-px size-px before:absolute after:absolute before:top-[-4px] before:content-[''] before:w-[1px] before:h-[9px] after:left-[-4px] after:content-[''] after:w-[9px] after:h-[1px]" :class="[crossx, crossy]"/>
    <span class="absolute -bottom-px -right-px size-px before:absolute after:absolute before:top-[-4px] before:content-[''] before:w-[1px] before:h-[9px] after:left-[-4px] after:content-[''] after:w-[9px] after:h-[1px]" :class="[crossx, crossy]"/>
    <span class="absolute -left-px -top-px size-px before:absolute after:absolute before:top-[-4px] before:content-[''] before:w-[1px] before:h-[9px] after:left-[-4px] after:content-[''] after:w-[9px] after:h-[1px]" :class="[crossx, crossy]"/>
    <span class="absolute -right-px -top-px size-px before:absolute after:absolute before:top-[-4px] before:content-[''] before:w-[1px] before:h-[9px] after:left-[-4px] after:content-[''] after:w-[9px] after:h-[1px]" :class="[crossx, crossy]"/>
    <div class="relative z-10 flex h-full flex-col justify-center">
      <slot/>
    </div>
  </component>
</template>

<style scoped>
/* @reference "~/assets/css/main.css" */
/* @import url("~/assets/css/main.css"); */

/*.cross {
  @apply before:absolute after:absolute;
  @apply before:top-[-4px] before:bg-[#2b7fff] before:content-[''] before:w-[1px] before:h-[9px];
  @apply after:left-[-4px] after:bg-[#2b7fff] after:content-[''] after:w-[9px] after:h-[1px];
} */
</style>