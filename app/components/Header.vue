<script setup lang="ts">
</script>

<template>
    <header class="relative tab border-b border-indigo-300/80 border-dashed -h-(--ui-header)">
        <!-- <div class="absolute w-full top-0 h-0.75 bg-indigo-500" /> -->
        <nav class="container py-4 w-full flex justify-between items-center @sm:w-12.5">
            <NuxtLink to="/" aria-label="Back to Home" class="logo size-fit flex gap-2 items-center">
                <NuxtImg 
                    preload 
                    loading="eager"
                    fetch-priority="high"
                    src="/images/avatar1.png" 
                    alt="suleiman hamza ai-generated-avatar" 
                    w="25" 
                    h="25" 
                    class="w-6.25 h-6.25 rounded-full outline outline-indigo-300/50" 
                />
                <h1 class="text-shadow-sm text-shadow-indigo-300">shs</h1>
            </NuxtLink>
            <Sidebar />
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
    /* background-image: linear-gradient(120deg, rgba(96, 102, 109, 0.3)rgba(240, 169, 169, 0.2)); */
}
</style>