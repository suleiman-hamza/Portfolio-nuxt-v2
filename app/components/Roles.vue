<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";
import gsap from "gsap";

// const { width: windowWidth } = useWindowSize();

const heroText = useTemplateRef("heroText");
let ctx: gsap.Context;

// Recalculate offsets on window/container resize
useResizeObserver(heroText, async () => {
  if (!heroText.value) return;

  // Wait for DOM layout changes to settle
  await nextTick();

  const elements = Array.from(heroText.value.children) as HTMLElement[];
  const containerWidth = heroText.value.clientWidth;

  elements.forEach((text) => {
    const textWidth = text.offsetWidth;
    const leftGutter = (containerWidth - textWidth) / 2;

    // Set a custom CSS property on each individual element
    text.style.setProperty("--left-offset", `-${leftGutter}px`);
  });
});

onMounted(async () => {
  await document.fonts.ready;

  if (!heroText.value) return;

  ctx = gsap.context(() => {
    const tl = gsap.timeline();
    const duration = 0.75;

    // Explicitly cast the elements to HTMLElement[]
    const elements = Array.from(heroText.value!.children) as HTMLElement[];

    // Get the width of the parent container
    const containerWidth = heroText.value!.clientWidth;

    elements.forEach((text, index) => {
      const textWidth = text.offsetWidth;

      // Calculate how far the text is pushed from the left edge due to text-align: center
      const leftGutter = (containerWidth - textWidth) / 2;
      // TypeScript now knows 'text' has layout properties!
      let width = text.offsetWidth; // or text.clientWidth
      tl.set(text, { opacity: 1 });
      tl.from(text, {
        duration,
        yPercent: 120,
        scale: 0.6,
        ease: "power3",
      });
      tl.to(
        text,
        {
          x: -leftGutter,
          duration: 0.5,
          // delay: index * 0.1,
        },
        "-=0.4",
      );
      console.log(width);
    });
  }, heroText.value);
});

onUnmounted(() => ctx?.revert());
</script>

<template>
  <div
    ref="heroText"
    class="hero rakkas flex flex-col gap-6 sm:gap-8 md:gap-12 justify-center items-center h-[calc(100vh-var(--ui-header))] p-4"
  >
    <h2 class="text-4xl rakkas">Designer</h2>
    <h2 class="text-4xl rakkas">Developer</h2>
    <h2 class="text-4xl rakkas">ERP</h2>
    <h2 class="text-4xl rakkas">Chef</h2>
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
  transform-origin: left center;
}
</style>
