// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/global.css"
  ],
  modules: 
  [
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
    '@pinia/nuxt',
  ],
});
