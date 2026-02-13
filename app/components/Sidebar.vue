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
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline" size="icon" class="p-2 rounded-none">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader class="border">
        <SheetClose class="border size-fit ml-auto"><OctagonX /></SheetClose>
        <SheetTitle>profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div class="p-4 text-white">
        <p>Some Content</p>
        <NuxtLink to="/about">About</NuxtLink>
      </div>
      <SheetFooter class="border">
        <Button type="submit">
          Save changes
        </Button>
        <!-- <SheetClose as-child>
          <Button variant="outline">
            Close
          </Button>
        </SheetClose>
        -->
    </SheetFooter> 
    </SheetContent>
  </Sheet>
</template>
