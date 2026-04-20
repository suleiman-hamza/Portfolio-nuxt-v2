<script setup lang="ts">
import { Bookmark, ChevronDown, ChevronUp } from 'lucide-vue-next'
import Button from './ui/button/Button.vue';
const props = defineProps<{
    source: object
}>()

const tocOpen = ref(false)

function openToc() {
    tocOpen.value = !tocOpen.value
}
</script>

<template>
    <div class="border-1/2 mb-4">
        <header class="p-2 flex gap-2 items-center bg-indigo-300/20">
            <Bookmark class="text-indigo-400" />
            <h3>What you'll learn</h3>
            <Button class="ml-auto p-2 rounded-none bg-transparent" square @click="openToc" size="icon">
                <ChevronUp v-if="tocOpen" />
                <ChevronDown v-else />
            </Button>
        </header>
        <div class="bg-amber-200/20 p-2 marker:text-amber-200 transition" v-if="tocOpen">
            <ul>
                <li class="list-disc list-inside text-white" v-for="value in props.source">{{ value }}</li>
            </ul>
        </div>
    </div>
</template>