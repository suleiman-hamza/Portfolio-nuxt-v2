<script setup lang="ts">
</script>

<template>
    <header class="border-b border-dashed">
        <nav class="tab p-4 w-full container">
            <span class="logo size-fit flex gap-2 items-center border">
                <img src="/images/avatar1.png" alt="suleiman avatar" class="w-[25px] h-[25px] rounded-full" />
                <h1>Hunter</h1>
            </span>
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