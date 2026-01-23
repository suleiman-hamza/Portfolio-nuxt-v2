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
    <section class="border-b h-screen mt-[58px]">
        <main
            class="container flex flex-col items-center justify-between border-x border-[#dedede] grid-background px-4 sm:py-12 bg-rose-100/50 h-full">
            <ul class="flex flex-wrap gap-2 mt-4 mb-4 text-[1rem] leading-none">
                <Motion as-child :initial="{ opacity: 0, x: 12 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.3 }">
                    <li>FrontEnd Engineer</li>
                </Motion>
                <hr class="divider">
                <Motion as-child :initial="{ opacity: 0, x: 6 }" :whileInView="{ opacity: 1, x: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.7 }">
                    <li>Software Engineer</li>
                </Motion>
                <hr class="divider">
                <Motion as-child :initial="{ opacity: 0, y: 4 }" :whileInView="{ opacity: 1, y: 0 }"
                    :transition="{ type: 'spring', stiffness: 100, duration: 2, delay: 0.3 }">
                    <li>Creative Designer</li>
                </Motion>
            </ul>
            <!-- <h1 class="text-4xl lg:text-6xl !mb-4">Suleiman <br> Hamza ~ Hunter</h1> -->
            <h2 class="text-slate-500 text-3xl lg:text-4xl leading-[1.3] !mt-18 !mb-4 max-w-[700px]">An independent
                creative developer
                pursuing standout solutions that are meaningful & scalable <span>&#128293</span></h2>
            <div class="border w-full">
            </div>
            <!-- <p>Feel free to explore my work and connect with me, I am excited to hear from you!</p> -->
        </main>
    </section>
</template>

<style>
.grid-background {
    background-image: linear-gradient(90deg, rgb(246, 246, 246) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(rgb(246, 246, 246) 1px, rgba(0, 0, 0, 0) 1px);
    background-size: 16px 16px;
}

.bd {
    background-color: #dedede;
}

.divider {
    /* border: 1px solid red; */
    width: 2px;
    height: auto;
    background-color: #dedede;
}
</style>