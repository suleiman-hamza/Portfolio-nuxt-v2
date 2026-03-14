<script setup lang="ts">
import { BellPlus, Settings, Telescope, BadgeCheck } from 'lucide-vue-next'

definePageMeta({
    layout: 'default'
})
</script>

<template>
    <section class="mt-(--ui-header) p-4">
        <h1 class="text-muted text-2xl mb-4">Odoo Development Service (v18, v19+)</h1>
        <p>I provide full cycle odoo implementation, from requirement gathering to deployment with minimal disruption. By aligning odoo with your business goals, i craft ERP Solutions that align perfectly with your workflow, compliance needs and growth goals across multiple industries.</p>

        <section class="mt-4">
            <h2 class="text-muted text-2xl mb-4 text-center">Technologies used for Odoo Development</h2>
            <div class="flex gap-4 flex-wrap">
                <div class="border">
                    <h4>Frontend</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div class="border">
                    <h4>Frontend</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div class="border">
                    <h4>Backend</h4>
                    <ul>
                        <li>Python</li>
                        <li>XML</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div class="border">
                    <h4>Database</h4>
                    <ul>
                        <li>Postgres</li>
                        <li>Docker</li>
                        <li>PGadmin 4</li>
                    </ul>
                </div>
                
            </div>
            </section>

            <!--services-->
            <section class="mt-4">
                <h2 class="text-muted text-2xl mb-4 text-center">Services</h2>
                <div class="grid sm:grid-cols-2 gap-4 p-1">
                    <span class="border p-4 flex flex-col gap-4 items-center">
                        <Telescope />
                        <p>Custom development</p>
                        <p>Develop tailored odoo modules to match your exact business process. From Nigeria Payroll structure to VAT automation and multi-currency handling.</p>
                    </span>
                    <span class="border p-4 flex flex-col gap-4 items-center">
                        <Settings />
                        <p>Custom ERP</p>
                        <p>Switching from outdated systems like SAP or Oracle?. I handle full ERP implementation. From strategy and data-migration to go-live and staff training.</p>
                    </span>
                    <span class="border p-4 flex flex-col gap-4 items-center">
                        <BellPlus />
                        <p class="text-center">Accounting, HR & Manufacturing Automation</p>
                        <p>Streamline your operations with smart automation. we digitize Accounting, HR, Payroll & Manufacturing workflows -- reducing errors and improving compliance with Nigerian accounting standards.</p>
                    </span>
                    <span class="border p-4 flex flex-col gap-4 items-center">
                        <BadgeCheck />
                        <p>Third Party API & Payment Integration</p>
                        <p>Integrate Odoo with third-party APIs, banking, logistics, POS or IoT to create one unified business platform that keeps your entire organization connected.</p>
                    </span>
                </div>
            </section>

            <!--faqs-->
            <section></section>
    </section>
</template>