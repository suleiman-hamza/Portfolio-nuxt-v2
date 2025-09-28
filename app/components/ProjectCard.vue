<script setup lang="ts">
import { EllipsisVertical } from 'lucide-vue-next'


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
    <div class="w-[150px] md:w-[220px] md:h-[280px] h-[200px] flex-none rounded-md shadow bg-[#141414]">
        <SpotlightCardSpolight class="w-full h-full p-2 md:p-4" gradient-color="#aba6df" :gradient-opacity="0.4"
            :gradient-size="100">
            <div class="flex justify-between flex-col h-[100%] w-full">
                <span class="flex gap-2 justify-end">
                    <button class="p-1 bg-slate-500 rounded-md">
                        <EllipsisVertical :size="18" />
                    </button>
                </span>
                <h3 class="text-sky-100 text-2xl text-center leading-none my-2">{{ name }}</h3>
                <div class="flex gap-1 flex-wrap">
                    <span v-for="item in tags" class="bg-red-100/70 px-1 text-sm rounded-md">{{ item }}</span>
                </div>
            </div>
        </SpotlightCardSpolight>
    </div>
</template>