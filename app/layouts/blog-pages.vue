<template>
    <div>
        <header class="fixed top-0 w-full z-100">
            <Header />
        </header>
        <main class="mt-(--ui-header)">
            <slot/>
        </main>
        <Footer />
    </div>
</template>