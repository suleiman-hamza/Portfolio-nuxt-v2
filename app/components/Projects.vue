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
    description: 'Get back on the grid - Create and Join Leagues - Share with friends',
    image:
      '/images/f1-banner.png',
    url: '#'
  },
  {
    name: 'RovelSub Point',
    description: 'Recharge, Subscribe and Pay Utility Bills',
    image:
      '/images/rovel-banner.png',
    url: 'https://rovellite.vercel.app',
  },
  {
    name: 'Nuxt AI Chat',
    description: 'AI sdk chat application with streaming interface',
    image:
      'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
    url: 'https://nuxt-ai-sdk.vercel.app',
  },
  {
    name: 'Food by Aneke',
    description: 'Experience flavours with a twist',
    image:
      '/images/logo-forage-with-aneke-background.svg',
    url: 'https://fba-lite.vercel.app/',
  },
  {
    name: 'Revel Office',
    description: 'Elevate your working experience, designed for ultimate comfort and lifestyle.',
    image:
      'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
    url: 'https://revel-office1.vercel.app/',
  },
  {
    name: 'Naira-X',
    description: 'Open Source model for everyone.',
    image:
      'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
      url: '#' // https://naira-x.vercel.app/
  },
]

</script>

<template>
  <section class="border-b border-gray-300/50">
    <div class="py-20 p-4 border-x container border-gray-300/50 bg-foreground">
      <div class="w-full max-w-3xl lg:max-w-5xl mx-auto">
        <p class="opacity-60 text-6xl md:text-8xl ml-10">Featured</p>
        <p class="opacity-60 text-6xl md:text-8xl animate-float">Projects</p>
      </div>
      <!-- <CrossedDiv crossx="after:bg-indigo-300" crossy="before:bg-indigo-300" class="align-center mx-auto size-max p-2 mb-4">
                  Featured Projects
                </CrossedDiv> -->
                <!-- <div class="relative mb-2 h-10 flex items-center justify-center">
                  <p class="opacity-60 text-4xl md:text-8xl">Featured Projects</p>
                </div> -->
      <div class="flex w-full max-w-3xl lg:max-w-5xl flex-col gap-6 items-center justify-center mx-auto">
        <ItemGroup class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          <Item v-for="model in models" variant="outline" as-child role="listitem"
            class="border-amber-200/60 bg-amber-200/5 rounded-none">
            <div>
              <ItemHeader>
                <NuxtLink :to="model.url" class="bg-black p-2 rounded-sm w-full">
                  <img :src="model.image" :alt="model.name" width="128" height="128"
                    class="aspect-square w-full object-contain grayscale">
                </NuxtLink>
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

<style scoped></style>