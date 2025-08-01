<script setup lang="ts">
import { Briefcase } from 'lucide-vue-next';
import Button from './ui/button/Button.vue'

import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'

const steps = [
    {
        step: 1,
        title: 'Rovel Tech Ltd',
        description:
            'Provide your name and email address. We will use this information to create your account',
    },
    {
        step: 2,
        title: 'Nexus Teams Kaduna',
        description: 'A few details about your company will help us personalize your experience',
    },
    {
        step: 3,
        title: 'Freelance Frontend Developer',
        description:
            'Start collaborating with your team by inviting them to join your account. You can skip this step and invite them later',
    },
]
</script>

<template>
    <section class="border-bottom">
        <div class="p-4 py-8 border-x border-[#dedede] container">
            <crossed-div class="p-1 mb-8 size-max">Work Experience</crossed-div>
            <div>
                <Stepper orientation="vertical" class="flex w-full max-w-md flex-col justify-start gap-10">
                        <StepperItem v-for="step in steps" :key="step.step" v-slot="{ state }"
                            class="relative flex w-full items-start gap-6" :step="step.step">
                            <StepperSeparator v-if="step.step !== steps[steps.length - 1].step"
                                class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />
                            <StepperTrigger>
                                <Briefcase />
                            </StepperTrigger>

                            <div class="flex flex-col gap-1">
                                <StepperTitle
                                    class="text-md sm:text-1xl font-semibold transition lg:text-base">
                                    {{ step.title }}
                                </StepperTitle>
                                <StepperDescription
                                    class="text-xs text-muted-foreground transition md:not-sr-only lg:text-sm">
                                    {{ step.description }}
                                </StepperDescription>
                            </div>
                        </StepperItem>
                    </Stepper>
            </div>
        </div>
    </section>
</template>

<style>
</style>