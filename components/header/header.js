import React from 'react'
import { Layout, Input, Row, Col, Select, Icon } from 'antd'
import './header.scss'

const { Option } = Select

function Header () {
  return (
    <Layout.Header>
      <Row type="flex" align="middle">
        <Col span={2}>
          <div className="logo"></div>
        </Col>
        <Col span={8}><Input placeholder="掘金搜索，如：Java，阿里巴巴，前端面试"></Input></Col>
        <Col span={14}>
          <Row type="flex" justify="end" gutter={20} className="text-md">
            <Col className="text-primary cursor-pointer">掘金小册</Col>
            <Col className="text-primary cursor-pointer">下载掘金 App</Col>
            <Col>
              <Select style={{ width: 120 }}>
                <Option value="lucy">lucy</Option>
              </Select>
            </Col>
            <Col>
              <Icon type="dash" className="text-lg cursor-pointer"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header
