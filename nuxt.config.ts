// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },


  css: ["@/scss/main.scss"],

runtimeConfig: {
    public: {
      apiUrl: "",
    },
  },

modules: [
    "@pinia/nuxt",
  ],




  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @import "@/scss/foundations/_variables.scss";
        @import "@/scss/foundations/_mixins.scss";
       
        `,
        },
      },
    },
  },
  

})
