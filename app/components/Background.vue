<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
// import { motion } from "motion-v";
import gsap from "gsap";

let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    let tl = gsap.timeline();

    tl.to(".backgroundSvg1", {
      rotation: 360,
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        scrub: true,
      },
    });
    tl.to(".backgroundSvg2", {
      rotation: -360,
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        scrub: true,
      },
    });
    tl.to(".backgroundSvg3", {
      rotation: 360,
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        scrub: true,
      },
    });
  });
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<template>
  <section class="border-b border-indigo-300/30">
    <div class="grid gap-10 md:grid-cols-2 p-2 py-20 container border-gray-300/50 bg-foreground">
      <CrossedDiv
        crossx="after:bg-indigo-300"
        crossy="before:bg-indigo-300"
        class="min-h-75 border-gray-300/50 border-dashed flex flex-col grid-background"
      >
        <div class="w-full grid grid-cols-1 grid-rows-[auto_200px] gap-3 h-full overflow-hidden">
          <div class="w-full h-auto flex items-center justify-center">
            <p class="text-[24px] md:text-[32px] font-bold rakkas tracking-wide">
              Building in Obsession
            </p>
          </div>
          <div class="w-full h-auto relative">
            <div class="absolute flex gap-4 bottom-5 left-1/2 -translate-x-1/2">
              <span class="border w-10 h-10 backgroundSvg1 border-rose-400 opacity-20" />
              <span class="border w-10 h-10 backgroundSvg2 border-teal-400 opacity-20" />
              <span class="border w-10 h-10 backgroundSvg3 border-sky-400 opacity-20" />
            </div>
            <span
              class="mt-20 md:mt-10 mx-auto animate-spin bg-indigo-500/20 rounded-full h-auto aspect-square w-full block border border-dashed"
            ></span>
          </div>
        </div>
      </CrossedDiv>
      <div class="max-w-2xl">
        <CrossedDiv
          crossx="after:bg-indigo-300"
          crossy="before:bg-indigo-300"
          class="align-center mx-auto size-max p-2 mb-4"
        >
          Background
        </CrossedDiv>
        <p class="text-xl md:text-2xl tracking-[2%]">
          A detail-oriented, design-driven and passionate developer with strong problem solving &
          technical expertise. I thrive in building scalable software applications, integrating
          complex systems and leveraging modern development tools and practices.
        </p>
        <NuxtLink
          to="/about"
          class="text-indigo-300 underline flex gap-1 items-center justify-center size-fit leading-0 transition-all duration-200 mt-4"
        >
          <span class="">More About Me</span>
          <ArrowUpRight :size="16" />
        </NuxtLink>
        <!-- <motion.div
  initial="hidden"
  whileInView="visible"
  :inViewOptions="{ once: true }"
>
<p>slide in</p>
</motion.div> -->
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.grid-background {
  background-image:
    linear-gradient(90deg, rgba(246, 246, 246, 0.089) 1px, rgba(0, 0, 0, 0) 1px),
    linear-gradient(rgba(246, 246, 246, 0.075) 1px, rgba(0, 0, 0, 0) 1px);
  background-size: 16px 16px;
}
</style>
