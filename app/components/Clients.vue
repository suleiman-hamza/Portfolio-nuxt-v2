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
        role: "CTO, Readyl."
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
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque mollitia quidem veritatis perspiciatis, ducimus, iusto ad nostrum velit atque at ullam incidunt possimus ut in illum. Soluta, repellendus dignissimos.",
        role: "Designer | CEO, Rovel Tech"
    }
])
</script>
<template>
    <section class="border-bottom">
        <div class="p-6 py-10 container border-x border-[#dedede]"> <!--border-x border-[#dedede]-->
        <p class="text-center text-2xl !mb-6">Here's what 99% of my clients say about my work</p>
        <section class="mb-12">
            <Carousel class="relative w-full">
                <CarouselContent>
                    <CarouselItem v-for="item in testimonyList" class="sm:basis-1/2 md:basis-1/3">
                        <div class="flex flex-col items-center justify-center gap-4 p-4 border bg-red-200 rounded-lg border-red-200">
                            <p class="border p-2">{{ item.text }}</p>
                            <div class="border flex flex-col justify-center items-center gap-1">
                                <span class="block w-[40px] h-[40px] border rounded-full"></span>
                                <h2 class="text-md">{{ item.client }}</h2>
                                <h3 class="text-(--muted-foreground) text-sm">{{ item.role }}</h3>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious class="top-[50%] left-[-15px]"/>
                <CarouselNext class="top-[50%] right-[-15px]" />
            </Carousel>
        </section>
        <p class="text-center text-2xl !mb-6">Here's what 99% of my clients say about my work</p>
    </div>
    </section>
</template>