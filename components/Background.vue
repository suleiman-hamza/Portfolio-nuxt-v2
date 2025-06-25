<script setup lang="ts">
</script>

<template>
    <section class="border-bottom">
        <div class="p-4 sm:py-8 container bg-(--secondary-foreground) text-[#dedede]"> <!--border-x border-[#dedede]-->
            <div class="grid grid-cols-[2fr_150px]">
                <div class="flex flex-col justify-between">
                    <CrossedDiv class="text-(--muted-foreground) size-min p-2">Background</CrossedDiv>
                    <p class="">I'm a software engineer specializing in web development.</p>
                </div>
                <span class="block justify-self-end w-[120px] h-[120px] bg-rose-400 rounded-md border border-dashed"></span>
            </div>
            <p class="!mb-4">I specialize in frontend tools and frameworks, with a strong focus in improving DX and infastructure</p>
            <p class="">Lorem ipsum dolor sit amet . Animi eveniet pariatur nulla temporibus veritatis deleniti tempore laborum officia laboriosam minus suscipit similique, porro cum consectetur, doloremque dicta excepturi iste provident.</p>
            <a href="#" class="text-sky-500 underline">Read More</a>
        </div>
    </section>
</template>