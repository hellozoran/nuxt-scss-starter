export default {

  target: 'static',

  head: {
    title: 'web-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '~/assets/css/reset.css',
    '~/assets/css/transitions.css',
    '~/assets/scss/main.scss'
  ],

  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
      '~/assets/scss/main.scss'
    ]
  },

  plugins: [
    { src: '~/plugins/vuelidate' }
  ],

  components: [
    '~/components/Display',
    '~/components/Layout',
    '~/components/UI'
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'French' },
      { code: 'es', iso: 'es-ES', file: 'es.json', name: 'Spanish' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark'
  },

  purgeCSS: {
    whitelist: ['dark-mode']
  },

  axios: {},

  build: {}
}
