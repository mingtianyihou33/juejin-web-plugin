import React from 'react'
import './articles.scss'
import {Select} from 'antd'
import {changeCategory, changeOrder} from "../../store/actions/article";
import {connect} from 'react-redux'

const {Option} = Select
const mapStateToProps = state => (
  {
    category: state.article.category,
    order: state.article.order
  }
)
const mapDispatchToProps = {
  changeCategory,
  changeOrder
}

const categories = [
  {value: 'all', label: '首页'},
  {value: 'frontend', label: '前端'},
  {value: 'backend', label: '后端'}
]
const orders = [
  {value: 'heat', label: '热门'},
  {value: 'time', label: '最新'}
]

function Articles(props) {
  return (
    <div className='border article'>
      <div className='content-navbar bg-primary text-md'>
        <img className='icon' src='favicon.ico'/>
        <span className='navbar-title text-lg'>掘金</span>
        <div className='flex-grow-1'>
          <Select value={props.category}
                  onChange={props.changeCategory}
                  className='select-border-none select-w-md bg-secondary'>
            {categories.map(item => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </div>
        {orders.map(item => (
          <span className={['right-btn', 'mr-1', props.order === item.value && 'active'].join(' ')}
                key={item.value}
                onClick={() => props.changeOrder(item.value)}>{item.label}
              </span>
        ))}
      </div>
      <div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
