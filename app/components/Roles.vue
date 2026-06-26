<script setup lang="ts">
import gsap from "gsap";

const heroText = useTemplateRef("heroText");
let ctx: gsap.Context;

onMounted(async () => {
  await document.fonts.ready;

  if (!heroText.value) return;

  ctx = gsap.context(() => {
    const tl = gsap.timeline();
    const duration = 0.75;

    Array.from(heroText.value!.children).forEach((text) => {
      tl.set(text, { opacity: 1 });
      tl.from(text, {
        duration,
        yPercent: 120,
        scale: 0.6,
        ease: "power3",
      });
    });
  }, heroText.value);
});

onUnmounted(() => ctx?.revert());
</script>

<template>
  <div
    ref="heroText"
    class="hero flex flex-col gap-4 justify-center items-center h-[calc(100vh-var(--ui-header))]"
  >
    <h2 class="text-2xl">Designer</h2>
    <h2 class="text-2xl">Developer</h2>
    <h2 class="text-2xl">ERP</h2>
    <h2 class="text-2xl">Chef</h2>
  </div>
</template>

<style lang="css" scoped>
h2 {
  opacity: 0;
  display: block;
  width: fit-content;
  /* background:#ddd; */
  color: rgb(67 184 239);
  font-family: raleway;
  font-weight: 900;
  text-transform: uppercase;
  /* font-size: 10em; */
  line-height: 1.1cap;
  margin: 0;
  user-select: none;
}
</style>
