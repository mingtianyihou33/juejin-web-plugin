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

const { Content } = Layout
const Home = () => (
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
  </Provider>
)

export default Home
