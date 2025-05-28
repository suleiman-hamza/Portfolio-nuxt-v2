<script setup lang="ts">
import { motion } from 'motion-v';

function runfunc() {
    console.log('something dey happen')
}
</script>

<template>
    <section class="border-bottom">
        <div class="p-4 container bg-(--secondary-foreground) text-white"> <!--border-x border-[#dedede]-->
            <p class="text-[#dedede] mb-4">Project Section</p>
            <p class="mb-4">Lorem ipsum dolor sit amet . Animi eveniet pariatur nulla temporibus veritatis deleniti tempore laborum officia laboriosam minus suscipit similique, porro cum consectetur, doloremque dicta excepturi iste provident.</p>
            <Buttonx @click="runfunc" class="bg-teal-600 !text-[#202020]">All Projects</Buttonx>
            <!-- <Button @click="runfunc">Button</Button> -->
            <motion.div 
                class="w-20 h-20 bg-blue-600 rounded-md mt-4 mb-4"
                :initial="{ rotate: 0 }"
                :hover="{ rotate: 360 }"
            />
            <SvgLogoPaths />
        </div>
    </section>
</template>