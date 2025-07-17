<script setup lang="ts">
import { Mail, Download } from 'lucide-vue-next'
</script>
<template>
    <section class="border-b">
        <main class="container border-x border-[#dedede] grid-background pt-8 pb-12 px-4 sm:py-12">
            <h1 class="text-4xl lg:text-6xl !mb-4 !mt-20">Suleiman <br> Hamza ~ Hunter</h1>
            <h2 class="text-slate-500 text-2xl lg:text-4xl leading-[1.3] !mb-4 max-w-[700px]">A creative developer pursuing standout solutions that are meaningful & scalable.</h2>
            <div class="flex flex-col gap-2">
                <button class="bg-stone-200/70 px-3 py-2 leading-none flex items-center gap-1 size-max">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><rect width="18.5" height="15.5" x="2.75" y="4.25" rx="3"/><path d="m2.75 8l8.415 3.866a2 2 0 0 0 1.67 0L21.25 8"/></g></svg>
                    <span>suleiman530@gmail.com</span>
                </button>
                <button class="bg-stone-200/70 px-3 py-2 leading-none flex items-center gap-1 size-max">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.074 3.25v12.478M6.19 10.465l4.822 4.822c.293.293.677.44 1.06.44m5.883-5.262l-4.822 4.822c-.293.293-.677.44-1.06.44m8.677.788v.935a3.3 3.3 0 0 1-3.3 3.3H6.55a3.3 3.3 0 0 1-3.3-3.3v-.935"/></svg>
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