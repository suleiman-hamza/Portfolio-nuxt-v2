<script setup lang="ts">
import { EllipsisVertical } from 'lucide-vue-next'
</script>

<template>
    <section class="border-bottom">
        <div class="p-4 py-10 container border-x border-[#dedede] bg-rose-100/50"> <!--border-x border-[#dedede]-->

            <CrossedDiv class="size-max text-[1.2rem] p-1 mb-8" as="section">Featured Projects</CrossedDiv>

            <!--selected project cards-->
            
            <div class="mb-4 flex gap-4 overflow-x-auto w-full flex-initial bar pb-2">
                <div class="w-[150px] md:w-[220px] md:h-[280px] h-[200px] border flex-none rounded-md shadow bg-[#141414]">
                    <div class="w-full h-full p-2 md:p-4 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <button class="border p-1 bg-slate-200 rounded-md">
                                <EllipsisVertical :size="18" />
                            </button>
                        </span>
                        <h3 class="text-sky-100 text-2xl text-center leading-none my-2">RovelSub Point</h3>
                        <div class="flex gap-1 flex-wrap">
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">web app</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">tool</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">pwa</span>
                        </div>
                    </div>
                </div>

                <div class="w-[150px] h-[200px] md:w-[220px] md:h-[280px] border flex-none rounded-md shadow bg-[#141414]">
                    <div class="w-full h-full p-2 md:p-4 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <button class="p-1 bg-blue-200 rounded-md">
                                <EllipsisVertical :size="18" />
                            </button>
                        </span>
                        <h3 class="text-sky-100 text-2xl text-center leading-none my-2">Naira-x</h3>
                        <div class="flex gap-1 flex-wrap">
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">web app</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">tool</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">pwa</span>
                        </div>
                    </div>
                </div>
                
                <div class="w-[150px] h-[200px] md:w-[220px] md:h-[280px] border flex-none rounded-md shadow bg-[#141414]">
                    <div class="w-full h-full p-2 md:p-4 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <button class="border p-1 bg-slate-200 rounded-md">
                                <EllipsisVertical :size="18" />
                            </button>
                        </span>
                        <h3 class="text-sky-100 text-2xl text-center leading-none my-2">Revel Office</h3>
                        <div class="flex gap-1 flex-wrap">
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">web app</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">tool</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">pwa</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">e-commerce</span>
                        </div>
                    </div>
                </div>
                <div class="w-[150px] h-[200px] md:w-[220px] md:h-[280px] border flex-none rounded-md shadow bg-[#141414]">
                    <div class="w-full h-full p-2 md:p-4 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <button class="border p-1 bg-slate-200 rounded-md">
                                <EllipsisVertical :size="18" />
                            </button>
                        </span>
                        <h3 class="text-sky-100 text-2xl text-center leading-none my-2">Aggr</h3>
                        <div class="flex gap-1 flex-wrap">
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">web app</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">tool</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">pwa</span>
                        </div>
                    </div>
                </div>
                
                <div class="w-[150px] h-[200px] md:w-[220px] md:h-[280px] border flex-none rounded-md shadow bg-[#141414]">
                    <div class="w-full h-full p-2 md:p-4 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <button class="border p-1 bg-slate-200 rounded-md">
                                <EllipsisVertical :size="18" />
                            </button>
                        </span>
                        <h3 class="text-sky-100 text-2xl text-center leading-none my-2">Mini-Mod</h3>
                        <div class="flex gap-1 flex-wrap">
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">web app</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">tool</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">pwa</span>
                        </div>
                    </div>
                </div>

                <div class="w-[150px] h-[200px] md:w-[220px] md:h-[280px] border flex-none rounded-md shadow bg-[#141414]">
                    <div class="w-full h-full p-2 md:p-4 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <button class="p-1 bg-rose-200 rounded-md">
                                <EllipsisVertical :size="18" />
                            </button>
                        </span>
                        <h3 class="text-sky-100 text-2xl text-center leading-none my-2">Tooly</h3>
                        <div class="flex gap-1 flex-wrap">
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">web app</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">tool</span>
                            <span class="bg-red-100/70 px-1 text-sm rounded-md">pwa</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end"><NuxtLink to="/" class="text-sky-400 text-[1.2rem]">See Playground</NuxtLink></div>
        </div>
    </section>
</template>

<style scoped>
.tab {
    background: linear-gradient(to right, rgba(124, 252, 134, 0.829), rgba(93, 160, 248, 0.815)); 
}
.bar::-webkit-scrollbar {
    display: none;
}

</style>