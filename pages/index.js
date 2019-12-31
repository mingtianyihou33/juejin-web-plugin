import React from 'react'
import Head from 'next/head'
import './index.scss'
import './theme.less'
import { Layout } from 'antd'
import { Button, Row, Col } from 'antd'
import Header from '../components/header/header'
import Articles from '../components/articleList/articles'
import { Provider } from 'react-redux'
import store from '../store/index'
import { createService } from '../plugins/axios'
import { loadArticleList } from '../store/actions/article'

const { Content } = Layout

function Home (props) {
  return (
    <Provider store={store}>
      <Head>
        <title>掘金</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout className='full'>
        <Header/>
        <Content className='main'>
          <Row gutter={24}>
            <Col span={8}>
              <Articles/>
            </Col>
            <Col span={16} className='border'></Col>
          </Row>
        </Content>
      </Layout>
    </Provider>)
}

// 服务端渲染时加载首屏数据
// Home.getInitialProps = async (context) => {
//   // console.log('server load data', context)
//   // const server = createService('https://extension-ms.juejin.im/')
//   // 文章列表
//   // await loadArticleList(store.dispatch, store.getState, server)
//   return {}
// }
export default Home
