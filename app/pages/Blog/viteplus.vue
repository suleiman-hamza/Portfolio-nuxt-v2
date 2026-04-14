<script setup lang="ts">
useSeoMeta({
    title: 'Blog: VitePlus just Landed',
    titleTemplate: '%s • Suleiman Hamza',
    publisher: 'Suleiman Hamza - Odoo Technical Developer'
})
definePageMeta({
    layout: 'blog-pages'
})

const title = 'Vite Plus just landed'
const postedOn = 'April 5, 2026'
</script>

<template>
    <div class="container">
        <BlogHeader :title :posted-on />
        <main class="py-4 border-b border-gray-300/50 border-dashed">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
            </p>
        </main>
    </div>
</template>