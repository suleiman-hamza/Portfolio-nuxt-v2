<script setup lang="ts">
// import { onMounted, onUnmounted, ref } from 'vue'
// import { useNuxtApp } from 'nuxt/app'
import gsap from "gsap";

const { $SplitText } = useNuxtApp();

let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "svg", // The element that kicks off the animation
        start: "top 80%", // Starts when the top of the SVG is 80% down the viewport
        end: "bottom 20%", // Ends when the bottom of the SVG reaches 20% from the top
        toggleActions: "play none none reverse", // Play on enter, reverse if scrolling back up
        // markers: true,      // Uncomment this line to see the start/end visual lines during dev
      },
    });
    tl.set("#mouse", { xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" });
    tl.to(
      "#mouse",
      {
        motionPath: {
          path: "#path",
          autoRotate: true,
        },
        transformOrigin: "50% 50%",
        duration: 5,
        ease: "power1.inOut",
      },
      0,
    );
    tl.to("#mouse", {
      opacity: 0, // Change to 1 if you kept it hidden, or 0 if you want it to vanish
      duration: 0.3, // Quick fade out
      ease: "power2.out",
    });
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
      <div class="absolute right-4 bottom-4 md:bottom-12">
        <!-- <span id="mouse" class="border rounded-full w-2 h-2 inline-block border-indigo-400"></span> -->
        <svg
          class="w-32 md:w-56 h-auto"
          viewBox="0 0 214 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="path"
            d="M11.4075 77.9153L19.3015 75.1696C20.6368 74.7051 21.3045 74.4729 22.036 74.1673C22.6216 73.9227 23.3871 73.5657 23.9509 73.2743C24.6552 72.9104 25.1706 72.6029 26.2014 71.9878C28.4067 70.672 31.2835 68.9044 33.4075 67.4153C37.2651 64.7109 42.3662 60.3129 44.5685 58.3793C44.9761 58.0214 45.1799 57.8425 45.3075 57.7377C45.4949 57.5838 45.4596 57.6115 45.6536 57.466C45.7857 57.3669 46.1467 57.1143 46.8688 56.6091C49.3864 54.8475 54.9864 50.4488 55.4075 45.9153C55.4075 45.9153 56.2528 42.344 54.9075 40.9153C53.3011 39.2095 51.0888 40.0597 48.9075 40.9153C45.623 42.2037 44.7317 47.8897 44.4931 50.5429C44.4748 50.7461 44.4657 50.8477 44.4597 51.2613C44.4563 51.4906 44.4793 52.1342 44.4989 52.3627C44.5343 52.7748 44.5614 52.942 44.6157 53.2762C44.9751 55.4906 45.783 59.9265 46.9075 62.9153C48.8179 67.9932 52.2596 69.7463 53.9075 74.9153C54.333 76.2502 54.6558 77.9267 54.8909 79.4699C55.0793 80.7071 55.1736 81.3256 55.1564 82.3368C55.1439 83.0702 54.986 84.2868 54.8108 84.9991C54.5693 85.9811 54.2711 86.6685 53.6747 88.0432C53.104 89.3587 52.4714 90.769 51.9075 91.9153C51.6667 92.4048 51.4015 92.9213 51.1207 93.452C48.2117 98.9507 41.853 101.534 35.7742 100.212C34.8795 100.018 34.0481 99.5917 33.4335 98.9132C32.5334 97.9194 31.2807 96.343 30.9075 94.9153C29.5343 89.663 39.4075 83.9153 39.4075 83.9153C39.4075 83.9153 46.964 78.9405 51.9075 75.9153C59.6949 71.1498 71.2857 64.9268 75.9036 62.4744C76.6695 62.0677 77.0524 61.8643 77.4102 61.6334C77.7261 61.4294 78.0358 61.2036 78.3266 60.9651C78.6559 60.6951 78.9483 60.4106 79.5329 59.8415C83.7262 55.76 94.896 44.7472 99.4075 38.9153C105.015 31.667 105.546 31.4233 108.407 25.9153C110.825 21.2625 113.083 13.7667 113.726 11.5513C113.771 11.3946 113.794 11.3163 113.831 11.1052C113.851 10.9969 113.887 10.6477 113.891 10.5377C113.898 10.3235 113.896 10.301 113.892 10.256C113.792 8.9034 113.191 5.74582 109.907 3.41533C105.618 0.371015 95.9075 15.4153 95.9075 15.4153C95.9075 15.4153 89.0104 28.6036 85.4075 37.4153C80.4109 49.6355 76.473 66.3434 73.8882 79.2605C72.7515 84.9404 72.1832 87.7803 72.4678 88.1426C72.7209 88.4648 73.1005 88.5946 73.4979 88.4947C73.9446 88.3825 75.2627 85.7306 77.8989 80.427C80.0787 76.0415 82.6296 71.6916 85.4075 68.4153C88.7403 64.4846 93.8857 60.3468 98.1876 57.1982C100.325 55.6337 101.394 54.8515 102.193 54.9599C102.863 55.0508 103.484 55.5189 103.755 56.1378C104.08 56.8763 103.611 58.1493 102.673 60.6951L94.7914 82.0874C93.3923 85.885 96.2026 89.9153 100.25 89.9153C101.966 89.9153 103.627 89.3082 104.939 88.2014L134.907 62.9153C134.907 62.9153 141.311 56.8211 143.907 51.9153C144.807 50.2156 145.163 49.1887 145.907 47.4153C147.838 42.8157 143.412 38.9708 139.901 42.5137C138.945 43.4782 138.079 44.6052 137.407 45.9153C135.549 49.5441 134.924 51.871 134.407 55.9153C132.991 67.0031 145.555 71.8597 143.907 82.9153C143.17 87.8656 142.691 91.1384 139.407 94.9153C136.309 98.4793 133.596 101.484 128.907 100.915C126.045 100.568 123.932 99.862 122.407 97.4153C121.295 95.6306 122.053 93.1597 123.196 91.0117C123.419 90.5915 122.86 91.6421 124.145 89.9237C124.703 89.1773 127.307 86.3469 128.004 85.729C129.61 84.3062 130.11 83.9843 131.11 83.3404C133.143 82.0319 135.489 80.5495 137.407 79.4153C143.498 75.8145 146.674 73.0895 153.407 70.9153C159.609 68.9126 163.392 68.5643 169.907 68.4153C177.583 68.2398 182.283 68.0551 189.407 70.9153C199.537 74.9819 207.729 79.2195 209.907 89.9153C213.201 106.084 192.773 110.901 177.407 116.915C169.775 119.903 165.011 120.188 156.907 121.415C121.823 126.73 102.348 107.158 66.9075 108.915C53.7481 109.568 46.0064 109.061 33.4075 112.915C19.8759 117.055 13.9042 123.276 1.40747 129.915"
            stroke="#7c86ff1a"
            stroke-width="6"
            stroke-linejoin="round"
          />
          <circle id="mouse" r="4" class="fill-transparent stroke-indigo-400 stroke-[2px]" />
        </svg>
      </div>
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
