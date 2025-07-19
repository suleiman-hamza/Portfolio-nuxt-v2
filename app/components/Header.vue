<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-vue-next';
import { House } from 'lucide-vue-next';
import { FileUser } from 'lucide-vue-next';
import { SquareChartGantt } from 'lucide-vue-next';
import { NotebookPen } from 'lucide-vue-next';


// const isOpen = ref(false)
</script>
<template>
    <section class="bg-transparent fixed z-20 w-full shadow top-0">
        <nav class="tab flex justify-between items-center p-4 border-x border-[#dedede] container">
            <span class="logo size-fit flex gap-2 items-center">
                <!-- <span class="w-[25px] h-[25px] rounded-full border-2 border-rose-500"></span> -->
                <img src="/images/avatar1.png" alt="user suleiman" class="w-[25px] h-[25px] rounded-full border border-rose-500" />
                <!-- <SvgLogoPaths /> -->
            </span>

            <div class="max-h-[18px] md:hidden">
                <Sheet>
                    <SheetTrigger class="size-fit ring-offset-background focus:ring-ring data-[state=open]:bg-secondary rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"><Menu class="size-4"/></SheetTrigger>
                    <SheetContent class="w-full bg-transparent text-white tab" side="top">
                    <SheetHeader>
                        <SheetTitle>Somethingz</SheetTitle>
                        <SheetDescription>
                            <ul class="flex-col flex gap-2 !mb-4">
                                <li class="flex gap-2 items-center"><House class="size-4"/><NuxtLink to="/">Home</NuxtLink></li>
                                <li class="flex gap-2 items-center"><FileUser class="size-4"/><NuxtLink to="/about">About</NuxtLink></li>
                                <li class="flex gap-2 items-center"><SquareChartGantt class="size-4"/><NuxtLink to="/">Work</NuxtLink></li>
                                <li class="flex gap-2 items-center"><NotebookPen class="size-4"/><NuxtLink to="/blog">Articles</NuxtLink></li>
                                <li class="flex gap-2 items-center"><NuxtLink to="/"><span>Github</span></NuxtLink></li>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>
            </div>
            
            <ul class="hidden md:flex gap-4 nav-links">
                <li class="" tabindex="0"><NuxtLink to="/">Home</NuxtLink></li>
                <li tabindex="1"><NuxtLink to="/about">About</NuxtLink></li>
                <!-- <li><NuxtLink to="/">Work</NuxtLink></li> -->
                <li><NuxtLink to="/blog">Articles</NuxtLink></li>
                <!-- <li><NuxtLink to="/">Github</NuxtLink></li> -->
            </ul>
        </nav>
    </section>
</template>

<style lang="css" scoped>
.nav-links:has(li:hover) li:not(:hover), .nav-links:has(li:focus) li:not(:focus) {
    opacity: 0.5;
}
li {
    transition: 300ms ease;
}
li:hover {
    transform: translateY(5px);
}
.tab {
    background-color: transparent;
    backdrop-filter: blur(10px);
    background-image: linear-gradient(120deg, rgba(96, 102, 109, 0.3)rgba(240, 169, 169, 0.2));
}
</style>