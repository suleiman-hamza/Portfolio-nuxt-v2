<script setup lang="ts">
definePageMeta({
    layout: 'blog-pages'
})
useSeoMeta({
    title: 'Blog: What is Odoo',
    titleTemplate: '%s • Suleiman Hamza',
    publisher: 'Suleiman Hamza - Odoo Technical Developer'
})

const title = 'What is ODOO ERP'
const postedOn = 'March 29, 2026'
</script>

<template>
    <div class="container">
        <BlogHeader :title="title" :posted-on="postedOn" />
        <main class="py-4 border-b border-gray-300/50 border-dashed">
            <p>Odoo, formerly known as OpenERP, is a software solution.</p>
            <p>Odoo provides a rapid application development framework that is particularly suited to 
building applications for business.</p>
<p>s. The Odoo software is company-driven, meaning that its 
roadmap and development are both tightly controlled by Odoo SA. However, it still 
follows open source principles, and community contributions to the code are welcome.</p>
<p>Odoo is a software product published by Odoo SA, a software company based in Belgium 
founded by Fabien Pinckaers.</p>
<div>The Odoo software follows the open core business model, meaning that some parts of the 
software are open source and some parts are proprietary. As a result of this model, Odoo 
publishes two editions:
<ul>
    <li>The Community Edition (CE) is publicly available, open source, and licensed under LGPL.</li>
    <li>
The Enterprise Edition (EE) is available only to official partners and customers and has a 
proprietary license requiring non-disclosure of the code.</li>
</ul>
</div>
<p>The Odoo EE works as a layer of additional modules on top of the Odoo CE core, offering 
premium features that are expected to provide enough value to motivate users to upgrade. 
The revenue from the Odoo EE funds the development for both the Odoo CE and EE. The 
Odoo founder and CEO Fabien Pinckaers has repeatedly pledged a commitment to keeping 
80% of the code as open source in the Odoo CE and 20% in the proprietary Odoo EE.
The biggest strength of any open source project is the community around it. Odoo has 
an active community of contributors. For the Odoo product, the community contributes 
with feature feedback, translations, security issue reports, bug fixes, and occasionally some 
technical improvements to the core product.</p>
<p>Beyond the Odoo core product, the community publishes additional Odoo modules 
that add features. Many individuals and companies in the Odoo community make their 
Git repositories publicly available under open source licenses. They also publish them 
in Odoo Apps – which is the official Odoo app store: apps.odoo.com. The app store 
allows for both free and paid modules.</p>
<p>The Odoo core project does not offer a space to host these community module efforts, so 
they are developed in a dispersed way, with no common standards and quality controls. 
The Odoo Community Association (OCA) was created to address this issue.</p>
<p>Odoo is being used by companies of all sizes; each company has a different business
flow and requirements</p>
<p>, Odoo splits the features of the
application into different modules. These modules can be loaded in the database on
demand. Basically, the user can enable/disable these feature at any time.
Consequently, the same software can be adjusted for different requirements</p>
        </main>
    </div>
</template>