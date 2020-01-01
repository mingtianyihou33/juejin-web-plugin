# juejin-web-plugin
仿掘金谷歌插件网页版，使用next+antv+redux构建
## 开发中遇到的问题
### 1.antd 怎么自定义主题?
- 需要引入 @import '~antd/dist/antd.less'，然后修改less变量
### 2.next 怎么同时支持less和sass解析？
- less，安装@zeit/next-less less
- sass，安装@zeit/next-sass node-sass
- 新建next.config.js文件，添加如下内容
```javascript
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
```

### 3.使用redux
- 安装 redux react-redux

### 4.客户端请求数据跨域问题解决
- 安装express http-proxy-middleware
- 创建server.js文件 修改next的行为，并添加代理
- 修改package.json 的script命令

```
  // 之前的
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  // 修改后的
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "cross-env NODE_ENV=production node server.js"
  },
```
### 5.服务端渲染列表后，如何初始化客户端state数据，让列表保持
- 在页面入口组件添加静态方法getInitialProps，然后获取要渲染的列表数据，然后然后请求接口数据
- 然后在组件的props中判断，如果有则设置到state里，用于初始化客服端state数据
```
// 服务端渲染时加载首屏数据
Home.getInitialProps = async () => {
  console.log('server load data')
  const server = createService('https://extension-ms.juejin.im/')
  // 文章列表
  let articleList = await loadArticleList(null, store.getState, server)
  return { articleList }
}

function Home (props) {
  // 设置文章列表
  if (props.articleList) {
    store.dispatch({ type: ARTICLE_SET_LIST, list: props.articleList })
  }
  ...
```


