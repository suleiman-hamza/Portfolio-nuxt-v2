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
    },
    {
        client: "Chaliph Joy",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque mollitia quidem veritatis perspiciatis, ducimus, iusto ad nostrum velit atque at ullam incidunt possimus ut in illum. Soluta, repellendus dignissimos.",
    },
    {
        client: "Adunniade rose",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque mollitia quidem veritatis perspiciatis, ducimus, iusto ad nostrum velit atque at ullam incidunt possimus ut in illum. Soluta, repellendus dignissimos.",
    },
    {
        client: "Toluwase Bewaji",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque mollitia quidem veritatis perspiciatis, ducimus, iusto ad nostrum velit atque at ullam incidunt possimus ut in illum. Soluta, repellendus dignissimos.",
    },
    {
        client: "Rovel Boss",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque mollitia quidem veritatis perspiciatis, ducimus, iusto ad nostrum velit atque at ullam incidunt possimus ut in illum. Soluta, repellendus dignissimos.", 
    }
])
</script>
<template>
    <section class="border-bottom">
        <div class="p-4 py-10 container border-x border-[#dedede]"> <!--border-x border-[#dedede]-->
            <CrossedDiv class="size-max text-[1.2rem] p-1 mb-8">Clients Tesimonials</CrossedDiv>
            <h2>Clients Tesimonials</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eaque mollitia quidem veritatis
                perspiciatis, ducimus, iusto ad nostrum velit atque at ullam incidunt possimus ut in illum. Soluta,
                repellendus dignissimos.</p>
            <section>
                <Carousel class="relative w-full">
                    <CarouselContent>
                        <CarouselItem v-for="item in testimonyList">
                            <div class="flex flex-col items-center justify-center gap-4 p-4 border rounded-lg border-red-200">
                                <h2>{{ item.client }}</h2>
                                <p class="border p-2">{{ item.text }}</p>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious class="top-0 left-0"/>
                    <CarouselNext class="top-0 right-0" />
                </Carousel>
            </section>
        </div>
    </section>
</template>