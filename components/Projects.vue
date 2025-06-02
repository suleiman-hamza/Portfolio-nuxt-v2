<script setup lang="ts">
import { motion } from 'motion-v';

function runfunc() {
    console.log('something dey happen')
}
</script>

<template>
    <section class="border-bottom">
        <div class="p-4 container grid-background border-x border-[#dedede]"> <!--border-x border-[#dedede]-->
            <!-- <p class="text-[#dedede] !mb-4">Project Section</p> -->
            <CrossedDiv class="text-[#dedede] !mb-4 size-min p-2">Projects</CrossedDiv>
            <p class="!mb-4">Lorem ipsum dolor sit amet . Animi eveniet pariatur nulla temporibus veritatis deleniti tempore laborum officia laboriosam minus suscipit similique, porro cum consectetur, doloremque dicta excepturi iste provident.</p>
            <Buttonx @click="runfunc" class="">All Projects</Buttonx>
        </div>
    </section>
</template>