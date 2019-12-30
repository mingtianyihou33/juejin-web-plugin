import React from 'react'
import './articles.scss'
import { Select } from 'antd'

const { Option } = Select
const categories = [
  { value: 'all', label: '首页' },
  { value: 'frontend', label: '前端' },
  { value: 'backend', label: '后端' }
]

function Articles () {
  return (
    <div className='border article'>
      <div className='content-navbar bg-primary text-md'>
        <img className='icon' src='favicon.ico'/>
        <span className='navbar-title text-lg'>掘金</span>
        <div className='flex-grow-1'>
          <Select value='frontend' className='select-border-none select-w-md bg-secondary'>
            {categories.map(item => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </div>
        <span className='right-btn mr-1 active'>热门</span>
        <span className='right-btn mr-1'>最新</span>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Articles
