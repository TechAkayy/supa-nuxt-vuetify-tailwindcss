export default defineNuxtConfig({
  // ssr: false,

  modules: [
    // 'vuetify-nuxt-module',
    '@nuxtjs/supabase',
  ],

  build: {
    transpile: ['vuetify'],
  },
})
