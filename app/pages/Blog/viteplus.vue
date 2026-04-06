<script setup lang="ts">
useSeoMeta({
    title: 'Vite-plus just landed',
    publisher: 'Suleiman Hamza - Software Developer'
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
        <main class="py-4 border-b">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ab beatae nam nesciunt quia illo itaque doloremque dolor vitae culpa repudiandae exercitationem unde molestias soluta repellat qui, eveniet corporis reprehenderit!
            </p>
        </main>
    </div>
</template>