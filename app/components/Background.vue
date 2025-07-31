<script setup lang="ts">
import { NuxtLink } from '#components';

</script>

<template>
    <section class="border-bottom">
        <div class="p-4 py-10 container bg-(--secondary-foreground) text-[#dedede]"> <!--border-x border-[#dedede]-->
            <!--background section header-->
            <CrossedDiv class="text-(--muted-foreground) align-center mx-auto size-max p-2 mb-4">Background
            </CrossedDiv>
            <section class="grid grid-cols-1 sm:grid-cols-2">
                <div
                    class="relative flex min-h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg lg:w-full md:w-full">
                    <!-- <p
                        class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                        Squared
                    </p> -->
                    <img src="/images/avatar1.png" class="" width="200"
                        alt="">
                    <Ripple class="bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
                        circle-class="border-[hsl(var(--primary))] bg-(--muted-foreground) dark:bg-(--muted-foreground) rounded-md" />
                </div>


                <div class="sm:p-4">
                    <p class="!mb-2">I'm a software engineer that specializes in modern web development.</p>
                    <p class="!mb-4 text-justify">I specialize in frontend tools and frameworks, with a strong focus in
                        improving DX and infastructure</p>
                    <p class="text-justify">Lorem ipsum dolor sit amet . Animi eveniet pariatur nulla temporibus veritatis
                        deleniti tempore laborum officia laboriosam minus suscipit similique, porro cum consectetur,
                        doloremque dicta excepturi iste provident.</p>
                    <NuxtLink to="/about" class="text-sky-500 underline">Read More</NuxtLink>
                </div>
            </section>
        </div>
    </section>
</template>