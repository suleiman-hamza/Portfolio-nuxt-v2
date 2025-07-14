<script setup lang="ts">
import { EllipsisVertical } from 'lucide-vue-next'
function runfunc() {
    console.log('something dey happen')
}
</script>

<template>
    <section class="border-bottom">
        <div class="p-4 container border-x border-[#dedede]"> <!--border-x border-[#dedede]-->
            <CrossedDiv class="size-min p-1 mb-4" as="section">Projects</CrossedDiv>

            <!--selected project cards-->
            
            <div class="mb-4 flex gap-4 overflow-x-scroll w-full flex-initial">
                <div class="w-[150px] h-[200px] border flex-none">
                    <div class="w-full h-full p-2 flex justify-between flex-col">
                        <span class="flex flex-col size-min gap-1 ml-auto">
                            <a href="/" class="border p-1 hover:bg-red-200">
                                <EllipsisVertical :size="18" />
                            </a>
                        </span>
                        <h3 class="text-[#202020] text-2xl text-center leading-none">Nova Tech</h3>
                    </div>
                </div>

                <div class="w-[150px] h-[200px] border flex-none">
                    <div class="w-full h-full p-2 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <a href="/" class="border p-1 hover:bg-red-200">
                                <EllipsisVertical :size="18" />
                            </a>
                        </span>
                        <h3 class="text-[#202020] text-2xl text-center leading-none">Rovel Tech LTD.</h3>
                    </div>
                </div>
                
                <div class="w-[150px] h-[200px] border flex-none">
                    <div class="w-full h-full p-2 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <a href="/" class="border p-1 hover:bg-red-200">
                                <EllipsisVertical :size="18" />
                            </a>
                        </span>
                        <h3 class="text-[#202020] text-2xl text-center leading-none">Naira-x</h3>
                    </div>
                </div>
                <div class="w-[150px] h-[200px] border flex-none">
                    <div class="w-full h-full p-2 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                           <a href="/" class="border p-1 hover:bg-red-200">
                                <EllipsisVertical :size="18" />
                            </a>
                        </span>
                        <h3 class="text-[#202020] text-2xl text-center leading-none">Revel Office</h3>
                    </div>
                </div>
                
                <div class="w-[150px] h-[200px] border flex-none">
                    <div class="w-full h-full p-2 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <a href="/" class="border p-1 hover:bg-red-200">
                                <EllipsisVertical :size="18" />
                            </a>
                        </span>
                        <h3 class="text-[#202020] text-2xl text-center leading-none">Rovel Tech LTD.</h3>
                    </div>
                </div>

                <div class="w-[150px] h-[200px] border flex-none rounded-md">
                    <div class="w-full h-full p-2 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <button class="border p-1 bg-slate-200 rounded-md">
                                <EllipsisVertical :size="18" />
                            </button>
                        </span>
                        <h3 class="text-[#202020] text-2xl text-center leading-none my-2">Tooly</h3>
                        <div class="flex gap-1 flex-wrap">
                            <span class="bg-red-200 px-1 text-sm rounded-md">web app</span>
                            <span class="bg-red-200 px-1 text-sm rounded-md">tool</span>
                            <span class="bg-red-200 px-1 text-sm rounded-md">pwa</span>
                        </div>
                    </div>
                </div>
            </div>
            <Buttonx @click="runfunc" class="">See Playground</Buttonx>
        </div>
    </section>
</template>

<style scoped>
.tab {
    background: rgba(255, 255, 255, 0.28);
    backdrop-filter: blur(26px);
}
</style>