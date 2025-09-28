<script setup lang="ts">
import { Motion } from "motion-v"
</script>
<template>
    <main class="border-b">
        <section class="container mt-[58px] border-[#dedede] about-grid bg-(--foreground) text-white">
            <header class="p-6 about-img">
                <h2 class="!mb-2">Hey, I'm Suleiman</h2>
                <img src="/images/replace-img.jpeg" width="400" alt="My pic">
            </header>
            <section class="p-6 about-desc">
                <h3 class="text-2xl font-semi !mb-4">Intro...</h3>
                <div class="leading-[1.7]">
                    <p>I'm a software engineer that specializes in modern web development.</p>
                    <p class="">I specialize in frontend tools and frameworks, with a strong focus in improving DX and infastructure</p>
                    <p>I have been working with Frontend technologies for over 2 Years. During these years i have been able to work with designers to create delightful User Interface and debug web apps.</p>
                    <p>My interest in the web started back in 2022. I was always curious about everything Tech & Trends. After trying out diffrent career paths in tech - from cybersecurity to penetration testing to programming, it just felt right the moment i began to write code.</p>
                    <p>I’m a Frontend Engineer with a passion for crafting smooth, responsive web experiences using Vue.js/Nuxt, Node.js/Express and TypeScript. My expertise lies in building intuitive interfaces and robust applications, leveraging powerful component libraries like VueUse and Vue Motion to create reusable and efficient code.</p>
                    <p>I’m well-versed in the Vue ecosystem, with a deep understanding of tools like Pinia, Vue Router, PrimeVue, Vitest, Nuxt-UI and Vite. My goal is to build applications that are not only visually engaging but also performant and scalable. i'm constantly exploring the latest advancements in frontend technology.</p>
                    <p>My other interests includes: Mountain Biking, Basketball, Events or Meetups, Volunteering and Gaming.</p>
                </div>
            </section>          
            <section class="p-4 about-exp">
                <h2 class="text-2xl font-semi !mb-5">Experience</h2>
                <div class="mb-2">
                    <h3 class="font-bold">ERP Technical Developer @ Growth-Stack</h3>
                    <h4 class="text-(--muted-foreground)">Sept, 2025 - Present</h4>
                </div>
                <div class="mb-2">
                    <h3 class="font-bold">FullStack Developer @ RovelTech</h3>
                    <h4 class="text-(--muted-foreground)">April 2025 - Present</h4>
                </div>
                <Motion as-child :initial="{opacity: 0, x: 12}" :whileInView="{opacity: 1, x: 0}" :transition="{ type: 'spring', stiffness: 100, duration: 2 }">
                <div class="mb-2">
                    <h3 class="font-bold">Founder @ Naira-X</h3>
                    <h4 class="text-(--muted-foreground)">2024 - Present</h4>
                </div>
                </Motion>
                <Motion as-child :initial="{opacity: 0, x: 12}" :whileInView="{opacity: 1, x: 0}" :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.3 }">
                <div class="mb-2">
                    <h3 class="font-bold">Frontend Engineer @ Nova </h3>
                    <h4 class="text-(--muted-foreground)">Aug, 2024 - Nov, 2024</h4>
                </div>
                </Motion>
                <Motion as-child :initial="{opacity: 0, x: 12}" :whileInView="{opacity: 1, x: 0}" :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.5 }">
                <div class="mb-2">
                    <h3 class="font-bold">Volunteer @ GDCS BUK</h3>
                    <h4 class="text-(--muted-foreground)">2022 - 2024</h4>
                </div>
                </Motion>
            </section>
            <section class="col-span-2">
                <Quote />
            </section>
            <section class="p-4">
                <p>Some other section will be below the quote</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam optio harum corporis, quaerat blanditiis velit sequi architecto recusandae deserunt veritatis nulla dolorum aliquam atque eaque molestias, consectetur nisi cupiditate quidem.</p>
            </section>
        </section>
    </main>
</template>

<style lang="css" scoped>

@media (min-width: 760px) {

}

</style>