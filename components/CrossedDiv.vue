<script setup lang="ts">
const { as = 'div', border = 'border-zinc-200/40', crossed = '#2b7fff' } = defineProps<{
  as?: string
  border?: string
  crossed?: string
}>()

// const props = withDefaults(defineProps<{
//   as?: string
//   color?: string
//   rounded?: boolean
//   padding?: string
// }>(), {
//   as: 'div',
//   color: 'black',
//   rounded: false,
//   padding: '1rem'
// })

</script>

<template>
  <component :is="as" class="relative -mb-px -ml-px border" :class="[border]">
    <span class="absolute -bottom-px -left-px size-px" :class="{ 'cross': crossed }"/>
    <span class="absolute -bottom-px -right-px size-px" :class="{ 'cross': crossed }"/>
    <span class="absolute -left-px -top-px size-px" :class="{ 'cross': crossed }"/>
    <span class="absolute -right-px -top-px size-px" :class="{ 'cross': crossed }"/>
    <div class="relative z-10 flex h-full flex-col justify-center">
      <slot/>
    </div>
  </component>
</template>

<style scoped>
/* @reference "~/assets/css/main.css" */
@import url("~/assets/css/main.css"); 

.cross {
  @apply before:absolute after:absolute;
  @apply before:top-[-4px] before:bg-[#2b7fff] before:content-[''] before:w-[1px] before:h-[9px];
  @apply after:left-[-4px] after:bg-[#2b7fff] after:content-[''] after:w-[9px] after:h-[1px];
}
</style>