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
    <section class="border-b border-gray-300/50 mt-(--ui-header)">
        <main
            class="container flex flex-col items-center justify-around py-8 border-x border-gray-300/50 grid-background px-4 sm:px-8 sm:py-12 bg-foreground) text-text-muted) h-svh">
            <ul class="flex flex-wrap justify-center gap-2 text-[1rem] leading-none">
                <Motion as-child :initial="{ opacity: 0, x: 12 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.3 }">
                    <li>FrontEnd Engineer</li>
                </Motion>
                <hr class="divider">
                <Motion as-child :initial="{ opacity: 0, x: 6 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.7 }">
                    <li>Creative Designer</li>
                </Motion>
                <hr class="divider">
                <Motion as-child :initial="{ opacity: 0, y: 4 }" :whileInView="{ opacity: 1, y: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.3 }">
                    <li>Odoo Technical Developer</li>
                </Motion>
            </ul>
            <!-- <h1 class="text-4xl lg:text-6xl !mb-4">Suleiman <br> Hamza ~ Hunter</h1> -->
            <h2 class="text-slate-500 text-3xl sm:text-4xl leading-[1.3] mb-4 max-w-175 text-center">
                An independent creative developer pursuing standout solutions that are meaningful & scalable <span>&#128293</span>
            </h2>
            <HeroLogoSet />
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