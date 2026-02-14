<script setup lang="ts">
import { Motion } from "motion-v"
</script>
<template>
    <main class="border-b">
        <section class="container mt-[68px] border-[#dedede] bg-(--foreground) text-white sm:grid sm:grid-cols-2">
            <header class="grid grid-cols-[auto_1fr]">
                <h2 class="text-2xl !mb-2 vertical p-2">Hey, I'm Suleiman</h2>
                <NuxtImg src="/images/replace-img.jpeg" v-slot="{ src, imgAttrs, isLoaded }" :custom="true"
                    alt="Image user" 
                    preload 
                    loading="eager"
                    fetch-priority="high">
                    <img v-if="isLoaded" v-bind="imgAttrs" :src="src" class="w-full max-w-[400px]">
                </NuxtImg>
            </header>
            <section class="p-4">
                <p>Some weird paragrapgh</p>
            </section>
            <section class="p-6 about-desc border border-amber-500 col-span-2">
                <h3 class="text-2xl font-semi !mb-4">Intro...</h3>
                <div class="leading-[1.7]">
                    <p>I’m a Frontend Engineer with a passion for crafting smooth, responsive web experiences using
                        Vue.js/Nuxt, Node.js/Express and TypeScript. My expertise lies in building intuitive interfaces
                        and robust applications, leveraging powerful component libraries like VueUse and Vue Motion to
                        create reusable and efficient code.</p>
                    <p>I’m well-versed in the Vue ecosystem, with a deep understanding of tools like Pinia, Vue Router,
                        PrimeVue, Vitest, Nuxt-UI and Vite. My goal is to build applications that are not only visually
                        engaging but also performant and scalable. i'm constantly exploring the latest advancements in
                        frontend technology.</p>
                    <p>My other interests includes: Mountain Biking, Basketball, Events or Meetups, Volunteering and
                        Gaming.</p>
                </div>
            </section>
            <section class="p-4 about-exp border border-green-500">
                <h2 class="text-2xl font-semi !mb-5">Professional Experience</h2>
                <div class="mb-2">
                    <h3 class="font-bold">ERP Technical Developer @ Ops29 Ltd.</h3>
                    <h4 class="text-(--muted-foreground)">Aug 2025 - Present</h4>
                </div>
                <div class="mb-2">
                    <h3 class="font-bold">Frontend Engineer @ RovelTech</h3>
                    <h4 class="text-(--muted-foreground)">March 2024 - Jan 2025</h4>
                </div>
                <Motion as-child :initial="{ opacity: 0, x: 12 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2 }">
                    <div class="mb-2">
                        <h3 class="font-bold">Founder @ Naira-X</h3>
                        <h4 class="text-(--muted-foreground)">2024 - Present</h4>
                    </div>
                </Motion>
                <Motion as-child :initial="{ opacity: 0, x: 12 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.3 }">
                    <div class="mb-2">
                        <h3 class="font-bold">Frontend Developer @upwork</h3>
                        <h4 class="text-(--muted-foreground)">Mar, 2019 - Jan, 2023</h4>
                    </div>
                </Motion>
                <Motion as-child :initial="{ opacity: 0, x: 12 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.5 }">
                    <div class="mb-2">
                        <h3 class="font-bold">Volunteer @ GDCS BUK</h3>
                        <h4 class="text-(--muted-foreground)">2022 - 2024</h4>
                    </div>
                </Motion>
            </section>

            <section class="col-span-2 border border-b-blue-400">
                <Quote />
            </section>
            <section class="p-4 border border-purple-500">
                <p>Some other section will be below the quote</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam optio harum corporis, quaerat
                    blanditiis velit sequi architecto recusandae deserunt veritatis nulla dolorum aliquam atque eaque
                    molestias, consectetur nisi cupiditate quidem.</p>
            </section>
        </section>
    </main>
</template>

<style lang="css" scoped>
.vertical {
    writing-mode: sideways-lr;
    text-orientation: sideways;
}

@media (min-width: 760px) {}
</style>