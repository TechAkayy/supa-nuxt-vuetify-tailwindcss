export default defineNuxtConfig({
  // ssr: false,

  modules: [
    /* Module method */
    // 'vuetify-nuxt-module',
    '@nuxtjs/supabase',
  ],
  build: {
    transpile: ['vuetify'],
  },
})
