<script setup lang="ts">
import { NuxtLink } from '#components';

</script>

<template>
    <section class="border-bottom">
        <div class="p-4 py-10 container bg-(--secondary-foreground) text-[#dedede]"> <!--border-x border-[#dedede]-->
            <!--background section header-->
            <div class="grid grid-cols-[2fr_150px]">
                <div class="flex flex-col justify-between">
                    <CrossedDiv class="text-(--muted-foreground) size-min p-2 mb-2">Background</CrossedDiv>
                    <p class="!mb-2">I'm a software engineer that specializes in modern web development.</p>
                </div>
                <img src="/images/avatar1.png" class="block justify-self-end border rounded-[38px] border-dashed" alt="">
                <!-- <span class="block justify-self-end w-[120px] h-[120px] bg-rose-400 rounded-md border border-dashed"></span> -->
            </div>
            <!--background section header-->
            <p class="!mb-4 text-justify">I specialize in frontend tools and frameworks, with a strong focus in improving DX and infastructure</p>
            <p class="text-justify">Lorem ipsum dolor sit amet . Animi eveniet pariatur nulla temporibus veritatis deleniti tempore laborum officia laboriosam minus suscipit similique, porro cum consectetur, doloremque dicta excepturi iste provident.</p>
            <NuxtLink to="/about" class="text-sky-500 underline">Read More</NuxtLink>
        </div>
    </section>
</template>