
const isProd = process.env.NODE_ENV === 'prod';
const API_URL = isProd ? process.env.API_URL_PROD : process.env.API_URL_DEV;

export default {
  publicRuntimeConfig: {
    apiURL: API_URL,
  },

  head: {
    title: "test bundle",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=0" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/styles.scss"],

  styleResources: {
    scss: ["./assets/scss/_vars.scss", "./assets/scss/_mixins.scss", "./bootstrap/scss/_mixins.scss"],
  },



  // fontLoader: {
  // fontLoader: {
  //   url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',

  //   prefetch: true,
  //   preconnect: true
  // }
  //   url: '/fonts/stylesheet.css'
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // 'nuxt-font-loader'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: false
  },
};
