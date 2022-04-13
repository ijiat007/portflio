const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: './docs',
  publicPath: '/portflio/',
  transpileDependencies: true,
  css: {
    extract: {
      filename: 'style.css?v=[hash:8]',
      chunkFilename: 'css/[name].css'
    },
    sourceMap: true,
    loaderOptions: {
      scss: {
        // additionalData: '@import "~@/assets/scss/_variables.scss"; @import "~@/assets/scss/_mixin.scss";'
        additionalData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixin.scss";
        `
      }
    }
  },
})
