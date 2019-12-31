import React from 'react'
import {Layout, Input, Row, Col, Select, Icon} from 'antd'
import './header.scss'
import {connect} from 'react-redux'
import {changeCategory} from '../../store/actions/category'

const mapStateToProps = state => ({category: state.category})
const mapDispatchToProps = dispatch => ({
  changeCategory: (...args) => {
    changeCategory(dispatch, ...args)
  }
})
const {Option} = Select
const categories = [
  {value: 'frontend', icon: 'code', label: '前端'},
  {value: 'backend', icon: 'code', label: '后端'}
]

function Header(props) {
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
                <Select className="select-border-none select-w-md" value={props.category}
                        onChange={props.changeCategory}>
                  {categories.map(item => (
                      <Option value={item.value} key={item.value}>
                        <Icon type={item.icon} className="text-primary"/>&nbsp;&nbsp;&nbsp;{item.label}
                      </Option>
                  ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
