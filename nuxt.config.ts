// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Software Engineer",
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '·',
        siteName: 'Suleiman Hamza'
      },
      meta: [
        {
          name: "description",
          content: "Software Engineer & Best ODOO Technical Developer in Nigeria",
        },
        { property: 'og:title', content: 'Suleiman Hamza - Software Engineer | Frontend Engineer | Odoo Developer' },
        { property: 'og:description', content: 'Experienced Software Engineer specializing in frontend development and Odoo ERP solutions. Passionate about crafting seamless web experiences and delivering tailored ERP implementations to drive business success.' },
        { property: 'og:image', content: 'https://mysite.com/og.png' },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
          sizes: "32x32",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-16x16.png",
          sizes: "16x16",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    },
  },
  site: { 
 url: 'https://hunterxx.vercel.app/', 
 name: 'Suleiman Hamza | Software Developer | Odoo Technical Developer' 
 }, 
 ogImage: {
    compatibility: {
      runtime: {
        browser: false
      }
    }
  },
  compatibilityDate: "2025-05-20",
  css: ["~/assets/css/main.css"],
  // At a minimum, a Vite plugin must have a name
  // Our plugin is an IIFE (Immediately Invoked Function Expression)
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'lucide-vue-next',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        '@vueuse/core',
        'embla-carousel-vue',
        'reka-ui',
      ]
    },
    plugins: [
      // inspect(),
      tailwindcss(),
    ],
  },
  devtools: { enabled: true },
  modules: ["shadcn-nuxt", "motion-v/nuxt", "@nuxt/image", "@nuxt/fonts", "@nuxtjs/seo", "nuxt-og-image"],
});