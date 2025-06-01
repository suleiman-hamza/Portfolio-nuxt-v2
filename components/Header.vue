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
import { ToggleRight } from 'lucide-vue-next';

// const isOpen = ref(false)
</script>
<template>
    <section class="border-bottom">
        <nav class="flex justify-between items-center p-4 border-x border-[#dedede] container">
            <span class="logo size-fit">
                <SvgLogoPaths />
            </span>

            <div class="max-h-[18px] md:hidden">
                <Sheet>
                    <SheetTrigger class="size-fit ring-offset-background focus:ring-ring data-[state=open]:bg-secondary rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"><Menu class="size-4"/></SheetTrigger>
                    <SheetContent class="w-full bg-transparent text-white tab" side="top">
                    <SheetHeader>
                        <SheetDescription>
                            <ul class="flex-col flex gap-2 !mb-4">
                                <li class="flex gap-2 items-center"><House class="size-4"/><NuxtLink to="/">Home</NuxtLink></li>
                                <li class="flex gap-2 items-center"><FileUser class="size-4"/><NuxtLink to="/">About</NuxtLink></li>
                                <li class="flex gap-2 items-center"><SquareChartGantt class="size-4"/><NuxtLink to="/">Work</NuxtLink></li>
                                <li class="flex gap-2 items-center"><NotebookPen class="size-4"/><NuxtLink to="/blog">Articles</NuxtLink></li>
                                <li class="flex gap-2 items-center"><NuxtLink to="/"><span>Github</span></NuxtLink></li>
                            </ul>
                            <footer class="border">
                                <div class="flex justify-between">
                                    <p>footer nav menu</p>
                                    <Button class="bg-background"><ToggleRight /></Button>
                                </div>
                            </footer>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>
            </div>
            
            <ul class="hidden md:flex gap-4">
                <li class=""><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/">About</NuxtLink></li>
                <li><NuxtLink to="/">Work</NuxtLink></li>
                <li><NuxtLink to="/blog">Articles</NuxtLink></li>
                <li><NuxtLink to="/">Github</NuxtLink></li>
            </ul>
        </nav>
    </section>
</template>

<style lang="css" scoped>

</style>