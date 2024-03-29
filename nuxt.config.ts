// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/slot-machine/' : '/',
    buildAssetsDir: '/static/'
  },
  css: ["bootstrap/dist/css/bootstrap.min.css"]
})
