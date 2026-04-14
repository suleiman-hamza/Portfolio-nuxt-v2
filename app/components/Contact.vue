<script setup lang="ts">
import { SendHorizonal, Plus } from 'lucide-vue-next'
</script>

<template>
    <section class="border-b border-gray-300/50">
        <div class="px-4 py-12 container bg-foreground border-x border-gray-300/50 overflow-hidden relative">
                        <div class="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-indigo-500/30 to-transparent" />
            <CrossedDiv crossx="after:bg-indigo-300" crossy="before:bg-indigo-300" class="mb-4 text-muted-foreground) p-2 size-max">Intrested in working with me?</CrossedDiv>
            <!-- <p class="!mb-4 text-(--muted-foreground)">Intrested in working with me ?</p> -->
            <div class="mb-4">
                <p class="mb-4 text-2xl text-muted">Intrested in having me on your team, I'd love to talk to you</p>

                <div class="mb-4">
                    <h3 class="">What i bring to your team 👇</h3>
                </div>
            </div>
            <!--experiment grid with crossed div-->
            <div class="mb-6 sm:w-125">
            <section class="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 relative border-b-[1.2px] border-r-[1.2px] border-zinc-200/40 text-muted">
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-10 relative">
                        <p>Extensive experience in buliding & maintaining high quality frontend applications.</p>
                        <span class="border-r border-b border-dashed absolute top-0 left-0 w-8 h-8 flex justify-center items-center">1</span>
                    </div>
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-10 relative">
                        <p>Solid knowledge of Design Systems, SPA architectures, Autonomous agents, LLMs, AI-driven workflows</p>
                        <span class="border-l border-b border-dashed absolute top-0 right-0 w-8 h-8 flex justify-center items-center">2</span>
                    </div>
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-10 relative">
                        <p>Proven track record of successful & timely project deliveries.</p>
                        <span class="border-r border-b sm:border-t sm:border-b-0 border-dashed absolute top-0 left-0 sm:top-auto sm:bottom-0 w-8 h-8 flex justify-center items-center">3</span>
                    </div>
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-10 relative">
                        <p>Translating product requirements & designs into polished user-friendly interfaces</p>
                        <span class="border-l border-b sm:border-t sm:border-b-0 border-dashed absolute top-0 right-0 sm:top-auto sm:bottom-0 w-8 h-8 flex justify-center items-center">4</span>
                    </div>
                    <!--crossed div-->
                    <div class="hidden sm:grid absolute top-1/2 left-0 -translate-y-1/2 z-30 w-full grid-cols-2">
                        <Plus class="translate-x-[12.5px] ml-auto text-indigo-300" />
                    </div>
                </section>
            </div>

            <RippleButton class="bg-white hover:shadow-sm shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] border transition duration-400">
                <span class="">Get in Touch</span>
                <SendHorizonal class="size-4 inline" />
            </RippleButton>
        </div>
    </section>
</template>

<style scoped></style>