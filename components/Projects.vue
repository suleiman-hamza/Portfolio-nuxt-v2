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
            <div class="mb-4 flex gap-4 overflow-x-scroll w-full flex-initial bg-blue-300">
                <div class="w-[150px] h-[200px] border flex-none glass-card">
                    <div class="w-full h-full p-2 flex justify-between flex-col">
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
                <div class="w-[150px] h-[200px] border flex-none glass-card">
                    <div class="w-full h-full p-2 flex justify-between flex-col">
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
                <div class="w-[150px] h-[200px] border flex-none bg-linear-to-r from-green-100 via-green-100 to-green-100/50">
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
                    <div class="w-[150px] h-[200px] border flex-none glass-card">
                        <p class="text-white">Hello there</p>
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

.glass-card {
    background: rgba(255, 255, 255, 0.28);
    backdrop-filter: blur(26px);
    position: relative;
}

.glass-card::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8));
}

.glass-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3));
}
</style>