<script setup lang="ts">
import { Mail, Download } from 'lucide-vue-next'
</script>
<template>
    <section class="border-b">
        <main class="container border-x border-[#dedede] grid-background pt-8 pb-12 px-4 sm:py-12">
            <h1 class="text-4xl lg:text-6xl !mb-4 !mt-20">Suleiman <br> Hamza ~ Hunter</h1>
            <h2 class="text-slate-500 text-2xl lg:text-4xl !mb-4">A creative developer pursuing standout solutions that are meaningful & scalable.</h2>
            <div class="flex flex-col gap-2">
                <button class="bg-stone-200/70 px-3 py-2 leading-none flex items-center gap-1 size-max">
                    <Mail :size="16"/>
                    <span>suleiman530@gmail.com</span>
                </button>
                <button class="bg-stone-200/70 px-3 py-2 leading-none flex items-center gap-1 size-max">
                    <Download :size="16"/>
                    <span class="">Download CV</span>
                </button>
            </div>
            <!-- <p>Feel free to explore my work and connect with me, I am excited to hear from you!</p> -->
        </main>
    </section>
</template>

<style>
    .grid-background {
        background-image: linear-gradient(90deg, rgb(246, 246, 246) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(rgb(246, 246, 246) 1px, rgba(0, 0, 0, 0) 1px);
        background-size: 20px 20px;
    }

    .bd {
        background-color: #dedede;
    }
</style>