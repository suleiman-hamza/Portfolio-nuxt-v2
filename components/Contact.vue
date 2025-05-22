<script setup lang="ts">
import { Send } from 'lucide-vue-next'
</script>

<template>
    <section class="border-bottom">
        <div class="px-4 py-12 border-x border-[#dedede] container">
            <p class="!mb-4 text-(--muted-foreground)">Contact Section</p>
            <div class="!mb-4">
                <p>Intrested in working with me?</p>
                <p>I'd love to talk to you.</p>
            </div>
            <Buttonx class="text-(--muted-foreground)">
                <span>Get in Touch</span>
                <Send class="size-4"/>
            </Buttonx>
        </div>
    </section>
</template>

<style scoped>
</style>