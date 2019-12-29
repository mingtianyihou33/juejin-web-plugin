import React from 'react'
import Head from 'next/head'
import './index.scss'
import './theme.less'
import { Layout } from 'antd'
import { Button } from 'antd'
import Header from '../components/header/header'

const { Content } = Layout
const Home = () => (
  <div>
    <Head>
      <title>掘金</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Layout>
      <Header/>
      <Content>
        <Button type="primary">按钮</Button>
      </Content>
    </Layout>
    <style jsx>{`
      
    `}</style>
  </div>
)

export default Home
