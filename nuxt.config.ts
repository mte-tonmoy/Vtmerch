// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      title: "Vtmerch",
      viewport: "width=device-width, initial-scale=1",
      link: [ { rel: "icon", type: "image/x-icon", href: "/logo.png" } ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "nuxt-svgo-loader",
    "@nuxtjs/google-fonts",
    "shadcn-nuxt"
  ],
  googleFonts: {
    families: {
      Montserrat: true,
      Inter: true,
    },
  },
  vite: {
    plugins: [require("vite-svg-loader")()],
  },
  css: [
    '~/assets/css/fonts.css'
  ]
});