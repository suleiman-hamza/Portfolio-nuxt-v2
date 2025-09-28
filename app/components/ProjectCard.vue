<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    }
})
</script>

<template>
    <div class="w-[150px] md:w-[220px] md:h-[280px] h-[200px] border flex-none rounded-md shadow bg-[#141414]">
        <div class="w-full h-full p-2 md:p-4 flex justify-between flex-col">
            <span class="flex gap-2 justify-end">
                <button class="border p-1 bg-slate-200 rounded-md">
                    <EllipsisVertical :size="18" />
                </button>
            </span>
            <h3 class="text-sky-100 text-2xl text-center leading-none my-2">{{ name }}</h3>
            <div class="flex gap-1 flex-wrap">
                <span v-for="item in tags" class="bg-red-100/70 px-1 text-sm rounded-md">{{ item }}</span>
            </div>
        </div>
    </div>
</template>