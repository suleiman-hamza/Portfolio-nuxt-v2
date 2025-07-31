<script setup lang="ts">
import { NuxtLink } from '#components';

</script>

<template>
    <section class="border-bottom">
        <div class="p-4 py-10 container bg-(--secondary-foreground) text-[#dedede]"> <!--border-x border-[#dedede]-->
            <!--background section header-->
            <CrossedDiv class="text-(--muted-foreground) align-center mx-auto size-max p-2 mb-4">Background
            </CrossedDiv>
            <section class="grid grid-cols-1 sm:grid-cols-[minmax(200px,_300px)_2fr]">
                <div
                    class="relative flex min-h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-md">
                    <img src="/images/avatar1.png" class="" width="200"
                        alt="">
                    <Ripple class="bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
                        circle-class="border-[hsl(var(--primary))] bg-(--muted-foreground) dark:bg-(--muted-foreground) rounded-md" />
                </div>


                <div class="sm:p-4 text-lg">
                    <p class="">I'm a software developer that specializes in modern web development.</p>
                    <p class="">I specialize in frontend tools and frameworks, with a strong focus in
                        improving DX and infastructure</p>
                    <p>I value long-term partnership, so i focus on scaling up your MVP and making sure that it delights your users.</p>
                    <NuxtLink to="/about" class="text-sky-500 underline">Read More</NuxtLink>
                </div>
            </section>
        </div>
    </section>
</template>