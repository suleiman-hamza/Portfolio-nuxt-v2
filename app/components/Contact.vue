<script setup lang="ts">
import { GitCommitVertical, SendHorizonal, Plus } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'

const steps = [
    {
        step: 1,
        title: 'Extensive experience in modern web development',
        description:
            'Provide your name and email address. We will use this information to create your account',
    },
    {
        step: 2,
        title: 'Strong focus on developer experience and UX',
        description: 'A few details about your company will help us personalize your experience',
    },
    {
        step: 3,
        title: 'Proven track record of successful project deliveries',
        description:
            'Start collaborating with your team by inviting them to join your account. You can skip this step and invite them later',
    },
]
</script>

<template>
    <section class="border-b">
        <div class="px-12 py-12 container bg-(--foreground) text-white">
            <CrossedDiv class="!mb-4 text-(--muted-foreground) p-2 size-max">Intrested in working with me?</CrossedDiv>
            <!-- <p class="!mb-4 text-(--muted-foreground)">Intrested in working with me ?</p> -->
            <div class="!mb-4">
                <p class="!mb-4 text-2xl">Intrested in having me on your team, I'd love to talk to you</p>

                <div class="mb-4">
                    <h3 class="text-(--muted-foreground)">What i bring to your team:</h3>
                </div>
            </div>
            <!--experiment grid with crossed div-->
            <div class="mb-6 sm:w-[500px]">
            <section class="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 relative border-b-[1.2px] border-r-[1.2px] border-zinc-200/40">
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-10 relative">
                        <p>Extensive experience in modern web development.</p>
                        <span class="border-r border-b border-dashed absolute top-0 left-0 w-8 h-8 flex justify-center items-center">1</span>
                    </div>
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-10 relative">
                        <p>Strong focus on developer experience and UX.</p>
                        <span class="border-l border-b border-dashed absolute top-0 right-0 w-8 h-8 flex justify-center items-center">2</span>
                    </div>
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-10 relative">
                        <p>Proven track record of successful project deliveries.</p>
                        <span class="border-r border-b sm:border-t sm:border-b-0 border-dashed absolute top-0 left-0 sm:top-auto sm:bottom-0 w-8 h-8 flex justify-center items-center">3</span>
                    </div>
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-10 relative">
                        <p>Proven track record of successful project deliveries.</p>
                        <span class="border-l border-b sm:border-t sm:border-b-0 border-dashed absolute top-0 right-0 sm:top-auto sm:bottom-0 w-8 h-8 flex justify-center items-center">4</span>
                    </div>
                    <!--crossed div-->
                    <div class="hidden sm:grid absolute top-1/2 left-0 -translate-y-1/2 z-30 w-full grid-cols-2">
                        <Plus class="translate-x-[12.5px] ml-auto" color="white"/>
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