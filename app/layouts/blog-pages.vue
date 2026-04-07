<template>
    <div>
        <header class="fixed w-full top-0 z-50">
            <Header />
        </header>
        <main class="mt-(--ui-header)">
            <slot/>
        </main>
        <Footer />
    </div>
</template>