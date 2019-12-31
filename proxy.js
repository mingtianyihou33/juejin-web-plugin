module.exports = {
  '/api': {
    target: 'https://extension-ms.juejin.im',
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
    ws: true,
    logLevel: 'debug'
  }
}
