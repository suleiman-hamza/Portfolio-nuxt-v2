<script setup lang="ts">

function runfunc() {
    console.log('something dey happen')
}
</script>

<template>
    <section class="border-bottom">
        <div class="p-4 container border-x border-[#dedede]"> <!--border-x border-[#dedede]-->
            <!-- <p class="text-[#dedede] !mb-4">Project Section</p> -->
            <CrossedDiv class="size-min p-1 mb-4" as="section">Projects</CrossedDiv>
            <p class="!mb-4">Lorem ipsum dolor sit amet . Animi eveniet pariatur nulla temporibus veritatis deleniti tempore laborum officia laboriosam minus suscipit similique, porro cum consectetur, doloremque dicta excepturi iste provident.</p>
            <Buttonx @click="runfunc" class="">All Projects</Buttonx>
        </div>
    </section>
</template>

<style scoped>
</style>