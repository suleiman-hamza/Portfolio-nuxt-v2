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
    <SheetTrigger as-child>
      <Button variant="outline" size="icon" class="p-2 rounded-none">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader class="p-0 border relative">
        <NuxtImg src="/images/afro-pattern.svg" class="w-full" />
        <SheetClose class="border size-fit ml-auto absolute top-4 right-4 z-10">
            <OctagonX />
        </SheetClose>
      </SheetHeader>
      <div class="p-4 text-white">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/about">PlayGround</NuxtLink>
        <NuxtLink to="/about">Github</NuxtLink>
        <NuxtLink to="/about">Project</NuxtLink>
      </div>
      <SheetFooter class="border p-0">
        <NuxtImg src="/images/afro-pattern.svg" class="w-full" />
        <!-- <Button type="submit">
          Save changes
        </Button> -->
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
