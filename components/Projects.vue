<script setup lang="ts">

function runfunc() {
    console.log('something dey happen')
}
</script>

<template>
    <section class="border-bottom">
        <div class="p-4 container border-x border-[#dedede]"> <!--border-x border-[#dedede]-->
            <CrossedDiv class="size-min p-1 mb-4" as="section">Projects</CrossedDiv>
            <!--selected project cards-->
            <div class="mb-4 flex gap-4 overflow-x-scroll w-full flex-initial">
                <div class="w-[150px] h-[200px] border flex-none"></div>
                <div class="w-[150px] h-[200px] border flex-none"></div>
                <div class="w-[150px] h-[200px] border flex-none"></div>
                <div class="w-[150px] h-[200px] border flex-none"></div>
                <div class="w-[150px] h-[200px] border flex-none"></div>
                <div class="w-[150px] h-[200px] border flex-none"></div>
            </div>
            <p class="!mb-4">Lorem ipsum dolor sit amet . Animi eveniet pariatur nulla temporibus veritatis deleniti tempore laborum officia laboriosam minus suscipit similique, porro cum consectetur, doloremque dicta excepturi iste provident.</p>
            <Buttonx @click="runfunc" class="">All Projects</Buttonx>
        </div>
    </section>
</template>

<style scoped>
</style>