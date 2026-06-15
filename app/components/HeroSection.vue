<script setup lang="ts">
// Reviews data
const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];

// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2));
const secondRow = ref(reviews.slice(reviews.length / 2));
</script>

<template>
    <section class="border-b border-indigo-300/30">
        <main
            class="relative border-x container flex flex-col justify-around py-8 border-indigo-300/30 grid-background px-4 sm:px-8 sm:py-12 bg-foreground h-dvh">
            <div>
                <h1 class="text-6xl md:text-8xl rakkas">Suleiman <br/> Hamza</h1>
                <span class="text-sm md:text-2xl font-bold">(Abuja, Nigeria)</span>
            </div>
            <h2 class="text-amber-200 text-2xl lg:text-3xl leading-[1.3] mb-4 max-w-175 rakkas">
                A creative developer pursuing standout solutions that are meaningful, secure & scalable. I focus on creating top-notch and impactful digital experience <span>&#128293</span>
            </h2>
            <SvgLogoPaths class="absolute bottom-4 right-4 text-gray-500 opacity-20" />
        </main>
    </section>
</template>

<style>
/* .grid-background {
    background-image: linear-gradient(90deg, rgba(246, 246, 246, 0.089) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(rgba(246, 246, 246, 0.075) 1px, rgba(0, 0, 0, 0) 1px);
    background-size: 16px 16px;
} */

.icon{
    --scale: 1;
    --rotation: 0deg;
    aspect-ratio: 1 / 1;
    transform: scale(var(--scale))rotate(var(--rotation));
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