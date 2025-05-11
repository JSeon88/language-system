import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  css: ['vuetify/styles', '@/assets/css/reset.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      plugins: [vuetify({ autoImport: true })],
    },
  },
});
