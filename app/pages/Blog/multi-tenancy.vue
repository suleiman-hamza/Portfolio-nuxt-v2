<script setup lang="ts"></script>

<template>
    <section class="p-4">
        <h2>What is Multi-Tenancy</h2>
        <p>Multi-tenancy is an architecture where a single instance of a software application serves multiple customers (tenants). Each tenant's data is isolated and remains invisible to other tenants, while all tenants share the same infastructure and codebase.</p>
        <div>
            <h2>Typical Multi-Tenancy Model</h2>
            <p>Here's a common implementation pattern for SaaS applications:</p>
            <ul>
                <li>Shared Infrastructure</li>
                <li>Shared Application Code</li>
                <li>Isolated Tenant Data</li>
            </ul>
        </div>
    </section>
</template>