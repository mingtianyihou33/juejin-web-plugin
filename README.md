# juejin-web-plugin
仿掘金谷歌插件网页版，使用next+antv+redux构建
## 开发中遇到的问题
### 1.antd 怎么自定义主题?
- 需要引入 @import '~antd/dist/antd.less'，然后修改less变量
### 2.next 怎么同时支持less和sass解析？
- less，安装@zeit/next-less less
- sass，安装@zeit/next-sass node-sass
- 新建next.config.js文件，添加如下内容
`
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
module.exports = withLess(withSass({
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
`
### 使用redux
- 安装 redux react-redux
