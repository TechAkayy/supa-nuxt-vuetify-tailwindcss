import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  // ssr: false,

  modules: [
    /* Module method */
    'vuetify-nuxt-module',
    '@nuxtjs/supabase',
  ],
})
