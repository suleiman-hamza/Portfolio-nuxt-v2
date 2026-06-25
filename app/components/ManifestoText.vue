<script setup lang="ts">
import gsap from "gsap";
const { $SplitText } = useNuxtApp();

onMounted(() => {
  $SplitText.create(".split", {
    type: "words",
    mask: "words",
    autoSplit: true,
    onSplit(splitText) {
      return gsap.from(splitText.words, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".split",
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    },
  });
});
</script>

<template>
  <section class="border-b border-indigo-300/30">
    <div class="bg-[radial-gradient(129%_99%_at_112%_85%,rgb(113,113,240)_20%,rgb(90,76,235)_90%)]">
      <div
        class="bg-[url(/images/noise-bg.png)] bg-center bg-contain [background-blend-mode: color-dodge] text-black"
      >
        <div class="split container p-4 py-20">
          <h1 class="text-3xl md:text-5xl font-medium tracking-tight max-w-4xl leading-tight">
            Engineered to <span class="text-white font-semibold">adapt</span> — <br />
            Fusing web engineering, workflow automation &
            <span class="text-white font-semibold">AI integrations</span> &
            <span class="text-white font-semibold">ERP consulting</span>
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>
