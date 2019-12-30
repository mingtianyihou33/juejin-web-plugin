const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
module.exports = withLess(withSass({
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: '[local]___[hash:base64:5]',
  // },
  // postcss支持
  postcssLoaderOptions: {
    parser: true,
    config: {
      ctx: {
        theme: JSON.stringify(process.env.REACT_APP_THEME)
      }
    }
  }
}))
