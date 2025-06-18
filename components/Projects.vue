<script setup lang="ts">
import { Donut, Github } from 'lucide-vue-next'
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
                <div class="w-[150px] h-[200px] border flex-none bg-linear-to-r from-indigo-400/50 via-purple-400 to-pink-400/50">
                    <div class="tab w-full h-full p-2 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <a href="/" class="border p-1 hover:bg-red-200">
                                <Donut :size="18" />
                            </a>
                            <a href="/" class="border p-1 hover:bg-red-200">
                                <Github :size="18" />
                            </a>
                        </span>
                        <h3 class="text-[#202020] text-2xl text-center leading-none">Nova Tech</h3>
                        <div class="flex gap-1 flex-wrap">
                            <b v-for="_ in 10" class="border bg-blue-300 w-[15px] h-[15px]"></b>
                        </div>
                    </div>
                </div>
                <div class="w-[150px] h-[200px] border flex-none bg-linear-to-b from-red-400 via-orange-400 to-amber-700/60">
                    <div class="tab w-full h-full p-2 flex justify-between flex-col">
                        <span class="flex gap-2 justify-end">
                            <a href="/" class="border p-1 hover:bg-red-200">
                                <Donut :size="18" />
                            </a>
                            <a href="/" class="border p-1 hover:bg-red-200">
                                <Github :size="18" />
                            </a>
                        </span>
                        <h3 class="text-[#202020] text-2xl text-center leading-none">Rovel Tech LTD.</h3>
                        <div class="flex gap-1 flex-wrap">
                            <b v-for="_ in 7" class="border bg-blue-300 w-[15px] h-[15px]"></b>
                        </div>
                    </div>
                </div>
                <div class="w-[150px] h-[200px] border flex-none bg-linear-to-r from-green-300 via-green-500 to-green-900/50">
                    <div class="tab w-full border h-full p-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="w-[150px] h-[200px] border flex-none bg-linear-to-b from-sky-400/50 via-blue-400 to-blue-900/80">
                    <div class="tab w-full h-full p-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, cumque. eque volupt</p>
                    </div>
                </div>
                <div class="w-[150px] h-[200px] border flex-none bg-linear-to-b from-slate-400 via-rose-200 to-pink-400/50">
                    <div class="tab w-full h-full p-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, cumque. eque volupt</p>
                    </div>
                </div>
                <div class="w-[150px] h-[200px] border flex-none bg-linear-to-r from-yellow-400/50 via-purple-400 to-fuchsia-400/50"></div>
            </div>
            <p class="!mb-4">Lorem ipsum dolor sit amet . Animi eveniet pariatur nulla temporibus veritatis deleniti tempore laborum officia laboriosam minus suscipit similique, porro cum consectetur, doloremque dicta excepturi iste provident.</p>
            <Buttonx @click="runfunc" class="">All Projects</Buttonx>
        </div>
    </section>
</template>

<style scoped>
.tab {
    background-color: transparent;
    backdrop-filter: blur(30px);
}
</style>