const path = require('path')
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
              @import "@/scss/_variables.scss";
            `,
            },
        },
    },
    productionSourceMap: false,
    devServer: {
        proxy: {
          '/api': {
            target: 'https://firebasestorage.googleapis.com',
            changeOrigin: true,
            pathRewrite: {
              '^/api': '', // Remove the '/api' prefix when forwarding the request
            },
          },
        },
      },
}
