// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Library of Vita',
      meta: [
        {name: 'description', content: 'Personal Profile of Daniel Liu '}
      ],
    },
  },
})