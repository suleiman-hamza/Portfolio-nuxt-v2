<script setup lang="ts">
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

const testimonyList = ref([
    {
        client: "ABdulRauf-Star",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque mollitia quidem veritatis perspiciatis, ducimus, iusto ad nostrum velit atque at ullam incidunt possimus ut in illum. Soluta, repellendus dignissimos.",
        role: "CTO, Readyl.",
        img: "/images/avatar1.png"
    },
    {
        client: "Ayatullah Suleiman",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque mollitia quidem veritatis perspiciatis, ducimus, iusto ad nostrum velit atque at ullam incidunt possimus ut in illum. Soluta, repellendus dignissimos.",
        role: "Cactus Jack Wears"
    },
    {
        client: "Adunniade rose",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque mollitia quidem veritatis perspiciatis, ducimus, iusto ad nostrum velit atque at ullam incidunt possimus ut in illum. Soluta, repellendus dignissimos.",
        role: "Designer"
    },
    {
        client: "Toluwase Bewaji",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque mollitia quidem veritatis perspiciatis, ducimus, iusto ad nostrum velit atque at ullam incidunt possimus ut in illum. Soluta, repellendus dignissimos.",
        role: "Mobile App Developer"
    },
    {
        client: "Rovel Boss",
        text: "elit. Praesentium, eaque mollitia quidem veritatis perspiciatis, ducimus, iusto ad nostrum velit atque at ullam incidunt possimus ut in illum. Soluta, repellendus dignissimos.",
        role: "Designer | CEO, Rovel Tech"
    }
])
</script>
<template>
    <section class="border-b border-gray-300/50">
        <div class="py-10 container border-gray-300/50"> <!--border-x border-[#dedede]-->
        <p class="text-center text-2xl mb-6">99% of my clients refer me, here's why they do</p>
        <section class="">
            <Carousel :opts="{ align: 'end' }" class="relative w-full">
                <CarouselContent class="h-auto">
                    <CarouselItem v-for="item in testimonyList" class="sm:basis-1/2 md:basis-1/3 h-full items-stretch">
                        <div class="flex flex-col items-center justify-between gap-4 p-4 border bg-indigo-200 rounded-lg text-foreground h-full">
                            <p class="p-2">{{ item.text }}</p>
                            <div class="flex flex-col justify-center items-center gap-1">
                                <span class="block w-10 h-10 rounded-full">
                                    <NuxtImg :src="item.img" />
                                </span>
                                <h2 class="text-md">{{ item.client }}</h2>
                                <h3 class="text-muted-foreground text-sm">{{ item.role }}</h3>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <!-- <CarouselPrevious class="top-[50%] -left-3.75"/>
                <CarouselNext class="top-[50%] -right-3.75" /> -->
            </Carousel>
        </section>
    </div>
    </section>
</template>