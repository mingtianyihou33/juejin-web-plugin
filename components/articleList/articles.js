import React from 'react'
import './articles.scss'
import { Select, Icon, Col } from 'antd'
import { changeCategory, changeOrder, loadMore } from '../../store/actions/article'
import { connect } from 'react-redux'
import { getTimeToNow } from '../../util/dateUtil'
import { scrollLoadMore } from '../../util/eventUtil'

const { Option } = Select
const mapStateToProps = state => (
  {
    category: state.article.category,
    order: state.article.order,
    list: state.article.list,
    loadEnd: state.article.loadEnd
  }
)
const mapDispatchToProps = {
  changeCategory,
  changeOrder,
  loadMore
}

const categories = [
  { value: 'all', label: '首页' },
  { value: 'frontend', label: '前端' },
  { value: 'backend', label: '后端' }
]
const orders = [
  { value: 'heat', label: '热门' },
  { value: 'time', label: '最新' }
]

function Articles (props) {
  const list = props.list.map(item => {
    return (
      <a className='article-item' key={item.id} href={item.url} target='_blank'>
        <div className='count-box'>
          <Icon type="caret-up"/>
          <div className='count'>{item.collectionCount}</div>
        </div>
        <div className='article-item-content'>
          <div className='title'>{item.title}</div>
          <div className='desc'>
            <span className='desc-item'>{getTimeToNow(item.date.iso)}</span>
            <span className='desc-item'>{item.user.username}</span>
          </div>
        </div>
      </a>
    )
  })

  return (
    <div className='article'>
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
      <div className='content-box' onScroll={scrollLoadMore(props.loadMore)}>
        {list}
        {props.loadEnd && <div className='list-end-bar'>已显示全部内容</div>}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
