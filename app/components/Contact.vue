<script setup lang="ts">
import { GitCommitVertical, SendHorizonal } from 'lucide-vue-next'
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
        <div class="px-12 py-12 container bg-(--secondary-foreground) text-white">
            <CrossedDiv class="!mb-4 text-(--muted-foreground) p-2 size-max">Intrested in working with me?</CrossedDiv>
            <!-- <p class="!mb-4 text-(--muted-foreground)">Intrested in working with me ?</p> -->
            <div class="!mb-4">
                <p class="!mb-4 text-2xl">Intrested in having me on your team, I'd love to talk to you</p>
                <div class="p-2 mb-3">
                    <h3 class="text-(--muted-foreground)">What i bring to your team:</h3>
                </div>
                <!--stepper prototype-->
                <section>
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
                                <!-- <StepperDescription
                                    class="text-xs text-muted-foreground transition md:not-sr-only lg:text-sm">
                                    {{ step.description }}
                                </StepperDescription> -->
                            </div>
                        </StepperItem>
                    </Stepper>
                </section>
                <!--stepper prototype-->
            </div>
            <Buttonx class="cursor-pointer mt-4 hover:bg-white hover:text-[#dedede]">
                <span class="text-(--muted-foreground)">Get in Touch</span>
                <SendHorizonal class="size-4" color="gray"/>
            </Buttonx>
            <!-- <p>You can get in touch by email, or if you'd love to connect on social media.</p> -->
        </div>
    </section>
</template>

<style scoped></style>