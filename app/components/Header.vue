<script setup lang="ts">
import Button from './ui/button/Button.vue';

// watch()
</script>

<template>
    <header class="border-b border-gray-300/50 border-dashed">
        <nav class="tab p-4 w-full container flex justify-between items-center">
            <NuxtLink to="/" class="logo size-fit flex gap-2 items-center">
                <img src="/images/avatar1.png" alt="suleiman avatar" class="w-[25px] h-[25px] rounded-full" />
                <h1 class="text-shadow-sm text-shadow-rose-200">shs</h1>
            </NuxtLink>
            <Sidebar />
            <!-- <ul class="flex list-none gap-2 text-shadow-sm text-shadow-rose-200">
            <li class="flex gap-3">
                Github
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5">
                        <path
                        d="M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146" />
                        <path
                        d="M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216" />
                    </g>
                </svg></span>
            </li>
        </ul> -->
        </nav>
    </header>
</template>

<style lang="css" scoped>
.nav-links:has(li:hover) li:not(:hover),
.nav-links:has(li:focus) li:not(:focus) {
    opacity: 0.5;
}

li {
    transition: 300ms ease;
}

li:hover {
    transform: translateY(5px);
}

.tab {
    background-color: transparent;
    backdrop-filter: blur(10px);
    background-image: linear-gradient(120deg, rgba(96, 102, 109, 0.3)rgba(240, 169, 169, 0.2));
}
</style>