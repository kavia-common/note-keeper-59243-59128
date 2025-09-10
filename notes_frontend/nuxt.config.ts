/* Nuxt configuration for Note Keeper frontend */
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Note Keeper',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Create, edit, view, and delete notes' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    // Private keys are only available on the server
    // Public keys are exposed to the client
    public: {
      // Users should set NUXT_PUBLIC_API_BASE in .env; default to /api for proxy or relative API
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
    },
  },

  nitro: {
    routeRules: {
      "/**": {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    },
  },

  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: true,
      port: 3000,
    },
  },
});
