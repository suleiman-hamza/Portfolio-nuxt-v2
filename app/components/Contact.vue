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

                <div class="p-2 mb-3">
                    <h3 class="text-(--muted-foreground)">What i bring to your team:</h3>
                </div>
                <!--stepper prototype-->
                <!-- <section>
                    <Stepper orientation="vertical" class="flex w-full max-w-md flex-col justify-start gap-10">
                        <StepperItem v-for="step in steps" :key="step.step" v-slot="{ state }"
                            class="relative flex w-full items-start gap-6" :step="step.step">
                            <StepperSeparator v-if="step.step !== steps[steps.length - 1].step"
                                class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />

                            <StepperTrigger as-child>
                                <Button variant="default"
                                    size="icon" class="z-10 rounded-full shrink-0 border">
                                    <GitCommitVertical />
                                </Button>
                            </StepperTrigger>

                            <div class="flex flex-col gap-1">
                                <StepperTitle
                                    class="text-md sm:text-1xl font-semibold transition lg:text-base">
                                    {{ step.title }}
                                </StepperTitle>
                            </div>
                        </StepperItem>
                    </Stepper>
                </section> -->
                <!--stepper prototype-->
            </div>
            <!--experiment grid with crossed div-->
            <div class="mb-6 w-[400px]">
            <section class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 relative border-b-[1.2px] border-r-[1.2px] border-zinc-200/40">
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-4">Extensive experience in modern web development.</div>
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-4">Strong focus on developer experience and UX.</div>
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-4">Proven track record of successful project deliveries.</div>
                    <div class="border-t-[1.2px] border-l-[1.2px] border-zinc-200/40 p-4">Proven track record of successful project deliveries.</div>
                    <!--crossed div-->
                    <div class="hidden md:grid absolute top-1/2 left-0 -translate-y-1/2 z-30 w-full grid-cols-2">
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