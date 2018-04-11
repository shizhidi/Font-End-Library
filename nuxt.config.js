const resolve = require('path').resolve
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '前端资源分享，分析场景需求',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,minimal-ui' },
      { hid: 'description', name: 'description', content: 'library project' },
      { hid: 'keywords', name: 'keywords', content: 'web框架,js框架,jquery插件,免费开源,场景需求' },
      { name: 'renderer', content: 'webkit' },
      { name: 'referrer', content: 'no-referrer' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/sass/index.scss', lang: 'scss' }
  ],
  /*
  ** Add axios globally
  */
  build: {
    styleResources: {
      scss: '~assets/sass/index.scss'
    },
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    {src: '~plugins/viewport.js', ssr: false},
    {src: '~plugins/vue-svg-icon.js'},
    {src: '~plugins/vue-awesome-swiper.js', ssr: false}
  ],
  loaders: [

  ],
  router: {
    // 自定义的路由配置
    extendRoutes (routes) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}
