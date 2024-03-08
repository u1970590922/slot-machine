// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt3-generate/' : '/',
    buildAssetsDir: '/static/'
  }
})
