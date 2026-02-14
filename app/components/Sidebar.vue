<script setup lang="ts">
import { OctagonX } from 'lucide-vue-next';
import { Menu } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { useRoute } from 'vue-router';
const route = useRoute()

const closeSheet = ref(false)
watch(route, () => {
    closeSheet.value = false
})
</script>

<template>
    <Sheet v-model:open="closeSheet">
        <SheetTrigger as-child >
            <Button variant="outline" size="icon" class="p-2 rounded-none" aria-label="Open Sidebar">
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader class="p-0 relative">
                <NuxtImg 
                    src="/images/afro-pattern.svg" 
                    class="w-full aspect-auto" 
                    preload 
                    loading="eager"
                    fetch-priority="high" 
                />
                <SheetClose class="border size-fit ml-auto absolute top-4 right-4 z-10">
                    <OctagonX />
                </SheetClose>
            </SheetHeader>
            <section class="p-4 text-white text-[20px] h-full flex flex-col justify-between">
                <div class="flex flex-col justify-between gap-4 h-auto">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/about">About</NuxtLink>
                    <NuxtLink to="https://github.com/suleiman-hamza">PlayGround</NuxtLink>
                    <NuxtLink to="https://github.com/suleiman-hamza">Github</NuxtLink>
                    <NuxtLink to="/articles">Articles</NuxtLink>
                </div>
                <div class="p-4 border w-full">

                </div>
            </section>
            <SheetFooter class="p-0">
                <NuxtImg 
                    src="/images/afro-pattern.svg" 
                    class="w-full aspect-auto" 
                    preload 
                    loading="eager"
                    fetch-priority="high" 
                />
            </SheetFooter>
        </SheetContent>
    </Sheet>
</template>
