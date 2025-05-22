<script setup lang="ts">
import { Button } from '@/components/ui/button'

function runfunc() {
    console.log('something dey happen')
}
</script>

<template>
    <section class="border-bottom">
        <div class="p-4 container bg-black text-white"> <!--border-x border-[#dedede]-->
            <p class="text-[#dedede] mb-4">Project Section</p>
            <p class="mb-4">Lorem ipsum dolor sit amet . Animi eveniet pariatur nulla temporibus veritatis deleniti tempore laborum officia laboriosam minus suscipit similique, porro cum consectetur, doloremque dicta excepturi iste provident.</p>
            <Buttonx @click="runfunc" class="bg-teal-600 !text-[#202020]">All Projects</Buttonx>
            <!-- <Button @click="runfunc">Button</Button> -->
        </div>
    </section>
</template>