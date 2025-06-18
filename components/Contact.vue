<script setup lang="ts">
import { Send } from 'lucide-vue-next'
</script>

<template>
    <section class="border-bottom">
        <div class="px-12 py-12 container bg-(--secondary-foreground) text-white">
            <CrossedDiv class="!mb-4 text-(--muted-foreground) p-2 size-max">Intrested in working with me?</CrossedDiv>
            <!-- <p class="!mb-4 text-(--muted-foreground)">Intrested in working with me ?</p> -->
            <div class="!mb-4">
                <p>Intrested in having me on your team, I'd love to talk to you</p>
                <p>I'm open to exciting opportunities that allows me to create impactful solutions.</p>
                <div class="border p-2">
                    <h3>What i bring to your team:</h3>
                    <ul>
                        <li>Extensive experience in modern web development.</li>
                        <li>Strong focus on developer experience and UX.</li>
                        <li>Proven track record of successful project deliveries.</li>
                    </ul>
                </div>
            </div>
            <Buttonx class="text-(--muted-foreground) border border-dashed cursor-pointer">
                <span>Get in Touch</span>
                <Send class="size-4"/>
            </Buttonx>
            <p>You can get in touch by email, or if you'd love to connect on social media.</p>
        </div>
    </section>
</template>

<style scoped>
</style>