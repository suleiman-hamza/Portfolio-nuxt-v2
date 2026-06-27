<script setup lang="ts">
// import { onMounted, onUnmounted, ref } from 'vue'
// import { useNuxtApp } from 'nuxt/app'
import gsap from "gsap";

const { $SplitText } = useNuxtApp();

let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    let tl = gsap.timeline();
    $SplitText.create(".hero", {
      type: "words",
      mask: "words",
      aria: "auto",
      autoSplit: true,
      onSplit(splitText) {
        const tween = gsap.from(splitText.words, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.05,
        });

        tl.add(tween, "0");
        return tween;
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
    <main
      class="hero relative border-x container flex flex-col justify-around py-8 border-indigo-300/30 grid-background px-4 sm:px-8 sm:py-12 bg-foreground h-dvh"
    >
      <div>
        <h1 class="text-6xl md:text-8xl rakkas">
          Suleiman <br />
          Hamza
        </h1>
        <span class="text-sm md:text-2xl font-bold">(Abuja, Nigeria)</span>
      </div>
      <h2 class="text-amber-200 text-2xl lg:text-3xl leading-[1.3] mb-4 max-w-175 rakkas">
        A creative developer pursuing standout solutions that are meaningful, secure & scalable. I
        focus on creating top-notch and impactful digital experience <span>&#128293;</span>
      </h2>
    </main>
  </section>
</template>

<style>
/* .grid-background {
    background-image: linear-gradient(90deg, rgba(246, 246, 246, 0.089) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(rgba(246, 246, 246, 0.075) 1px, rgba(0, 0, 0, 0) 1px);
    background-size: 16px 16px;
} */

.icon {
  --scale: 1;
  --rotation: 0deg;
  aspect-ratio: 1 / 1;
  transform: scale(var(--scale)) rotate(var(--rotation));
  width: auto;
  transition: transform 0.3s ease-in-out;
}

.divider {
  /* border: 1px solid red; */
  width: 2px;
  height: auto;
  background-color: #dedede;
}
</style>
