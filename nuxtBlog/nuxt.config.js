export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  target: 'static',
  router: {
    base: '/repo/'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/styles.scss',
  ],

  styleResources: {
    scss: ['./bootstrap/scss/_mixins.scss', './assets/scss/_vars.scss', './assets/scss/_mixins.scss',
    ]
  },


  webfontloader: {
    google: {
      families: ["Syncopate:500,700", "Montserrat:400,500"]
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/marquee-text-component.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    'bootstrap-vue/nuxt',
    'nuxt-webfontloader',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: false
  },


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
