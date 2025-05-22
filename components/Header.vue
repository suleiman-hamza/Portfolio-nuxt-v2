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

const isOpen = ref(false)
</script>
<template>
    <section class="border-bottom">
        <nav class="flex justify-between items-center p-4 border-x border-[#dedede] container">
            <span class="logo size-fit">
                <h2 class="leading-[1] border text-[1.4rem]">SH</h2>
            </span>

            <div class="size-fit">
                <Sheet>
                    <SheetTrigger class="size-fit"><Menu /></SheetTrigger>
                    <SheetContent class="w-full" side="top">
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            
            <ul class="hidden lg:flex gap-4">
                <li class="bg-blue-400"><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/">About</NuxtLink></li>
                <li><NuxtLink to="/">Work</NuxtLink></li>
                <li><NuxtLink to="/">Articles</NuxtLink></li>
                <li><NuxtLink to="/">Github</NuxtLink></li>
            </ul>
        </nav>
    </section>
</template>