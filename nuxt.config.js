require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'COVID-19 Sri Lanka',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'author',
        content: 'P. K. Tharindu'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'og:title',
        content: 'COVID-19 Sri Lanka'
      },
      {
        name: 'og:url',
        content: process.env.BASE_URL || 'http://localhost:3000'
      },
      {
        name: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'og:image',
        content:
          (process.env.BASE_URL || 'http://localhost:3000') +
          '/social-banner.png'
      },
      {
        name: 'twitter:title',
        content: 'COVID-19 Sri Lanka'
      },
      {
        name: 'twitter:description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'twitter:url',
        content: process.env.BASE_URL || 'http://localhost:3000'
      },
      {
        name: 'twitter:image',
        content:
          (process.env.BASE_URL || 'http://localhost:3000') +
          '/social-banner.png'
      },
      {
        name: 'twitter:creator',
        content: '@CallMeTharindu'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/balloon-css/balloon.min.css'
      }
    ]
  },
  pwa: {
    manifest: {
      name: 'COVID-19 Sri Lanka',
      short_name: 'COVID-19 Sri Lanka',
      title: 'COVID-19 Sri Lanka'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#5a67d8' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/vue-apexchart.js',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-161447260-1'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-vue-multiselect'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  purgeCSS: {
    whitelistPatterns: [/multiselect/]
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
