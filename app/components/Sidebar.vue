<script setup lang="ts">
import { OctagonX, Download } from 'lucide-vue-next';
import { Menu } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { useRoute } from 'vue-router';
const route = useRoute()

const closeSheet = ref(false)
watch(route, () => {
    closeSheet.value = false
})

const navList = ref([
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About',
        to: '/about'
    },
    {
        label: 'Playground',
        to: 'https://github.com/suleiman-hamza'
    },
    {
        label: 'Blog',
        to: '/blog'
    },
])
</script>

<template>
    <Sheet v-model:open="closeSheet">
        <SheetTrigger as-child >
            <Button variant="outline" size="icon" class="p-2 outline-0 border-none bg-transparent rounded-none ring ring-indigo-300" aria-label="Open Sidebar">
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader class="p-0 relative">
                <NuxtImg 
                    src="/images/afro-pattern.svg" 
                    class="w-full aspect-auto" 
                    preload 
                    loading="eager"
                    fetch-priority="high" 
                />
                <SheetClose class="border size-fit ml-auto absolute top-4 right-4 z-10">
                    <OctagonX />
                </SheetClose>
            </SheetHeader>
            <section class="p-4 text-indigo-300 text-[20px] h-full flex flex-col gap-5">
                <div class="flex flex-col justify-between h-auto">
                    <NuxtLink v-for="item in navList" :to="item.to" class="size fit hover:bg-indigo-100/20 p-2 transition-all duration-300">{{ item.label }}</NuxtLink>
                </div>
                <div>
                    <Button class="cursor-pointer">
                        Download Resume
                        <Download />
                    </Button>
                </div>
                <!--icons-->
                <div class="mt-auto flex justify-end divide divide-accent-foreground gap-2">
<NuxtLink to="https://x.com/thee_hamza001" target="_blank" aria-label="X (Twitter) Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m13.081 10.712l-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576l6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576l5.842-6.962m-8.004 9.538L5.077 20.25" />
                    </svg>
            </NuxtLink>
            <!--instagram-logo-->
            <NuxtLink to="https://www.instagram.com/_suleiman_hue/" target="_blank" aria-label="Instagram Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none">
                            <rect width="17" height="17" x="3.5" y="3.5" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="1.5" rx="5.5" />
                            <circle cx="12" cy="12" r="3.606" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="1.5" />
                            <circle cx="16.894" cy="7.106" r="1.03" fill="currentColor" />
                        </g>
                    </svg>
            </NuxtLink>
            <!--discord-logo-->
            <NuxtLink to="https://discord.gg/eaNBB5vg" target="_blank" aria-label="Discord Profile">
                    <!--link-->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9.621 7.5H7.25a4.5 4.5 0 0 0-4.5 4.5v0a4.5 4.5 0 0 0 4.5 4.5h2.371m4.758-9h2.371a4.5 4.5 0 0 1 4.5 4.5v0a4.5 4.5 0 0 1-4.5 4.5h-2.371M7.243 12h9.514" />
                    </svg>
                    <!--link-->
            </NuxtLink>
            <!--bluesky-logo-->
            <NuxtLink to="https://bsky.app/profile/suleiman-hue.bsky.social" target="_blank" aria-label="Bluesky Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.753 4.514l.434 5.853a3.354 3.354 0 0 0 3.345 3.106h.702l-.51.291a5.94 5.94 0 0 0-2.447 2.677a2.655 2.655 0 0 0 .74 3.17l.972.787c1.226.994 3 1.236 4.085.089c.92-.974 1.32-1.914 1.405-2.128q.018-.046.032-.093l.295-.924c.111-.347.176-.707.194-1.07c.018.363.083.723.194 1.07l.295.924q.014.047.032.093c.084.214.486 1.154 1.405 2.128c1.084 1.147 2.859.906 4.085-.088l.971-.788a2.655 2.655 0 0 0 .741-3.17a5.94 5.94 0 0 0-2.447-2.676l-.51-.292h.702a3.354 3.354 0 0 0 3.345-3.106l.434-5.853c.101-1.363-1.373-2.25-2.5-1.477c-1.726 1.18-3.77 2.698-4.565 3.754c-1.41 1.872-2.117 3.559-2.182 3.719c-.065-.16-.772-1.847-2.182-3.72c-.795-1.055-2.84-2.573-4.564-3.754c-1.128-.772-2.602.115-2.5 1.478" />
                    </svg>
            </NuxtLink>
            <!--github-logo-->
            <NuxtLink to="https://github.com/suleiman-hamza" target="_blank" aria-label="Github Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5">
                        <path
                        d="M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146" />
                        <path
                        d="M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216" />
                    </g>
                </svg>
        </NuxtLink>
                </div>
            </section>
            <SheetFooter class="p-0">
                <NuxtImg 
                    src="/images/afro-pattern.svg" 
                    class="w-full aspect-auto" 
                    preload 
                    loading="eager"
                    fetch-priority="high" 
                />
            </SheetFooter>
        </SheetContent>
    </Sheet>
</template>
