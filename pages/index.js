import React, { useEffect } from 'react'
import Head from 'next/head'
import './index.scss'
import './theme.less'
import { Layout } from 'antd'
import { Button, Row, Col } from 'antd'
import Header from '../components/header/header'
import Articles from '../components/articleList/articles'
import Projects from '../components/projectList/projects'
import { Provider } from 'react-redux'
import store from '../store/index'
import { createService } from '../plugins/axios'
import { loadArticleList } from '../store/actions/article'
import { ARTICLE_SET_LIST, PROJECT_SET_LIST } from '../store/actionTypes'
import { loadProjectList } from '../store/actions/project'

const { Content } = Layout

function Home (props) {
  // 设置文章列表
  if (props.articleList) {
    store.dispatch({ type: ARTICLE_SET_LIST, list: props.articleList })
  }
  if (props.projectList) {
    store.dispatch({ type: PROJECT_SET_LIST, list: props.projectList })
  }
  return (
    <Provider store={store}>
      <Head>
        <title>掘金</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout className='full'>
        <Header/>
        <Content className='main'>
          <Row gutter={16} className='full-v'>
            <Col span={8} className='full-v'>
              <Articles/>
            </Col>
            <Col span={16} className='full-v'>
              <Projects/>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Provider>)
}

// 服务端渲染时加载首屏数据
Home.getInitialProps = async () => {
  console.log('server load data')
  const server = createService('https://extension-ms.juejin.im/')
  // 文章列表
  let articleList = await loadArticleList(null, store.getState, server)
  let projectList = await loadProjectList(null, store.getState, server)
  return { articleList, projectList }
}
export default Home
