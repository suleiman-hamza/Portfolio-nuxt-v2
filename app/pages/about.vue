<script setup lang="ts">
import { Motion } from "motion-v"
import { ShieldAlertIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from '@/components/ui/item'

definePageMeta({
    layout: 'pages',
})
</script>
<template>
    <main class="">
        <section class="container mt-17 border-[#dedede] bg-foreground text-white sm:grid sm:grid-cols-2">
            <header class="grid grid-cols-[auto_1fr] border-b border-gray-300/50">
                <h2 class="text-2xl mb-2 vertical p-2">Hey, I'm Suleiman</h2>
                <NuxtImg src="/images/replace-img.jpeg" v-slot="{ src, imgAttrs, isLoaded }" :custom="true"
                    alt="Image user" preload loading="eager" fetch-priority="high">
                    <img v-if="isLoaded" v-bind="imgAttrs" :src="src" class="w-full max-w-100">
                </NuxtImg>
            </header>
            <section class="p-4 col-span-2 border-b border-gray-300/50">
                <h3 class="text-2xl font-semi mb-4">Intro...</h3>
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
            <section class="p-4 about-exp">
                <h2 class="text-2xl font-semi mb-5">Professional Experience</h2>
                <div class="mb-2">
                    <h3 class="font-bold">ERP Technical Developer @ Ops29 Ltd.</h3>
                    <h4 class="text-muted-foreground)">Aug 2025 - Present</h4>
                </div>
                <div class="mb-2">
                    <h3 class="font-bold">Frontend Engineer @ RovelTech</h3>
                    <h4 class="text-muted-foreground)">March 2024 - Jan 2025</h4>
                </div>
                <Motion as-child :initial="{ opacity: 0, x: 12 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2 }">
                    <div class="mb-2">
                        <h3 class="font-bold">Founder @ Naira-X</h3>
                        <h4 class="text-muted-foreground)">2024 - Present</h4>
                    </div>
                </Motion>
                <Motion as-child :initial="{ opacity: 0, x: 12 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.3 }">
                    <div class="mb-2">
                        <h3 class="font-bold">Frontend Developer @upwork</h3>
                        <h4 class="text-muted-foreground)">Mar, 2019 - Jan, 2023</h4>
                    </div>
                </Motion>
                <Motion as-child :initial="{ opacity: 0, x: 12 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.5 }">
                    <div class="mb-2">
                        <h3 class="font-bold">Volunteer @ GDCS BUK</h3>
                        <h4 class="text-muted-foreground)">2022 - 2024</h4>
                    </div>
                </Motion>
            </section>
            <section class="p-4 py-8">
                <h2 class="text-2xl mb-4">Volunteering</h2>
                <div class="flex w-full max-w-lg flex-col gap-6">
                    <Item variant="outline" class="rounded-none">
                        <ItemContent>
                            <ItemTitle>GDSC BUK</ItemTitle>
                            <ItemDescription>
                                GDG on Campus BUK
                            </ItemDescription>
                        </ItemContent>
                        <ItemMedia variant="icon">
                            <ShieldAlertIcon />
                        </ItemMedia>
                    </Item>
                    <Item variant="outline" class="rounded-none">
                        <ItemContent>
                            <ItemTitle>Founders Friday Abuja</ItemTitle>
                            <ItemDescription>
                                Startup founders community in Abuja
                            </ItemDescription>
                        </ItemContent>
                        <ItemMedia variant="icon">
                            <ShieldAlertIcon />
                        </ItemMedia>
                    </Item>
                </div>
            </section>
            <section class="p-4 text-primary-foreground sm:col-start-2 sm:row-start-1 border-b border-gray-300/50">
                <h4 class="text-2xl mb-2">Let's Connect</h4>
                <p class="mb-2">Feel free to connect with me on any of these platforms.</p>
                <div class="flex flex-col gap-4">
                    <NuxtLink to="https://github.com/suleiman-hamza" target="_blank" aria-label="Github Profile"
                        class="flex items-center p-2 px-3 font-light size-fit bg-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            class="w-auto h-full mr-2">
                            <g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5">
                                <path
                                    d="M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146" />
                                <path
                                    d="M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216" />
                            </g>
                        </svg>
                        <span class="text-white">@suleiman-hamza</span>
                    </NuxtLink>
                    <NuxtLink to="https://x.com/thee_hamza001" target="_blank"
                        aria-label="X/Twitter Profile"
                        class="flex items-center p-2 px-3 font-light size-fit bg-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            class="w-auto h-full mr-2">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m13.081 10.712l-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576l6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576l5.842-6.962m-8.004 9.538L5.077 20.25" />
                        </svg>
                        <span class="text-white">@thee_hamza001</span>
                    </NuxtLink>
                    <NuxtLink to="https://www.instagram.com/_suleiman_hue/" target="_blank"
                        aria-label="Instagram Profile"
                        class="flex items-center p-2 px-3 font-light size-fit bg-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            class="w-auto h-full mr-2">
                            <g fill="none">
                                <rect width="17" height="17" x="3.5" y="3.5" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="5.5" />
                                <circle cx="12" cy="12" r="3.606" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="1.5" />
                                <circle cx="16.894" cy="7.106" r="1.03" fill="currentColor" />
                            </g>
                        </svg>
                        <span class="text-white">@_suleiman_hue</span>
                    </NuxtLink>
                    <NuxtLink to="https://bsky.app/profile/suleiman-hue.bsky.social" target="_blank"
                        aria-label="Bluesky Profile"
                        class="flex items-center p-2 px-3 font-light size-fit bg-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            class="w-auto h-full mr-2">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"
                                d="m2.753 4.514l.434 5.853a3.354 3.354 0 0 0 3.345 3.106h.702l-.51.291a5.94 5.94 0 0 0-2.447 2.677a2.655 2.655 0 0 0 .74 3.17l.972.787c1.226.994 3 1.236 4.085.089c.92-.974 1.32-1.914 1.405-2.128q.018-.046.032-.093l.295-.924c.111-.347.176-.707.194-1.07c.018.363.083.723.194 1.07l.295.924q.014.047.032.093c.084.214.486 1.154 1.405 2.128c1.084 1.147 2.859.906 4.085-.088l.971-.788a2.655 2.655 0 0 0 .741-3.17a5.94 5.94 0 0 0-2.447-2.676l-.51-.292h.702a3.354 3.354 0 0 0 3.345-3.106l.434-5.853c.101-1.363-1.373-2.25-2.5-1.477c-1.726 1.18-3.77 2.698-4.565 3.754c-1.41 1.872-2.117 3.559-2.182 3.719c-.065-.16-.772-1.847-2.182-3.72c-.795-1.055-2.84-2.573-4.564-3.754c-1.128-.772-2.602.115-2.5 1.478" />
                        </svg>
                        <span class="text-white">@suleiman-hue.bsky.social</span>
                    </NuxtLink>
                </div>
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