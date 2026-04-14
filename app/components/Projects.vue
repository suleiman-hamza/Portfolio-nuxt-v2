<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item'

const models = [
  {
    name: 'F1-League',
    description: 'Everyday tasks and UI generation.',
    image:
      'https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop',
    credit: 'Valeria Reverdo on Unsplash',
  },
  {
    name: 'RovelSub Point',
    description: 'Advanced thinking or reasoning.',
    image:
      'https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop',
    credit: 'Michael Oeser on Unsplash',
  },
  {
    name: 'Kaduna Direct',
    description: 'Open Source model for everyone.',
    image:
      'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
    credit: 'Cherry Laithang on Unsplash',
  },
  {
    name: 'Better Nuxt',
    description: 'Open Source model for everyone.',
    image:
      'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
    credit: 'Cherry Laithang on Unsplash',
  },
  {
    name: 'Revel Office',
    description: 'Open Source model for everyone.',
    image:
      'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
    credit: 'Cherry Laithang on Unsplash',
  },
  {
    name: 'Naira-X',
    description: 'Open Source model for everyone.',
    image:
      'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
    credit: 'Cherry Laithang on Unsplash',
  },
]

</script>

<template>
    <section class="border-b border-gray-300/50">
        <div class="py-10 container border-gray-300/50 bg-foreground">
            <CrossedDiv crossx="after:bg-indigo-300" crossy="before:bg-indigo-300" class="size-max p-1 mb-8" as="section">Featured Projects</CrossedDiv>
            <div class="flex w-full max-w-3xl lg:max-w-5xl flex-col gap-6">
    <ItemGroup class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <Item
        v-for="model in models"
        variant="outline"
        as-child
        role="listitem"
        class="border-amber-200"
      >
      <div>

        <ItemHeader>
          <img
          :src="model.image"
          :alt="model.name"
          width="128"
          height="128"
          class="aspect-square w-full rounded-sm object-cover grayscale"
          >
        </ItemHeader>
        <ItemContent>
          <ItemTitle>{{ model.name }}</ItemTitle>
          <ItemDescription>{{ model.description }}</ItemDescription>
        </ItemContent>
      </div>
      </Item>
    </ItemGroup>
  </div>
        </div>
    </section>
</template>

<style scoped>
</style>