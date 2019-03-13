'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const urls = 'http://60shop.wohuicn.com/'
module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
//       '/api/getLoginData': {
//         target: urls+'/api/login/test',
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api/getLoginData': ''
//         }
//       },
//       '/api/getSliderData': {
//         target: urls+'/api/index/adver',
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api/getSliderData': ''
//         }
//       },
//       '/api/getClassify': {
//         target: urls+'/api/good/categoryList',
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api/getClassify': ''
//         }
//       },
//       '/api/getRecommend': {
//         target: urls+'/api/index/recommend',
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api/getRecommend': ''
//         }
//       },
//       '/api/getDetail': {
//         target: urls+'/api/good/detail',
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api/getDetail': ''
//         }
//       },
//       '/api/addCart': {
//         target: urls+'/api/cart/addCart',
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api/addCart': ''
//         }
//       },
//       '/api/getShopCart': {
//         target: urls+'/api/cart/getCartList',
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api/getShopCart': ''
//         }
//       },
      '/wapi': {
        target: 'http://60shop.wohuicn.com/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/wapi': '/index.php/wapi'
        }
      },
      '/api': {
        target: 'http://104.151.50.99:8360/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    // host: '192.168.1.119', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'public/web',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
