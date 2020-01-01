import React from 'react'
import './projects.scss'
import { Select, Icon, Row, Col } from 'antd'
import { changeCategory, changePeriod, changeLang, loadMore } from '../../store/actions/project'
import { connect } from 'react-redux'
import { getTimeToNow } from '../../util/dateUtil'
import { scrollLoadMore } from '../../util/eventUtil'

const { Option } = Select
const mapStateToProps = state => (
  {
    category: state.project.category,
    period: state.project.period,
    lang: state.project.lang,
    list: state.project.list,
    loadEnd: state.project.loadEnd
  }
)
const mapDispatchToProps = {
  changeCategory,
  changePeriod,
  changeLang,
  loadMore
}

const categories = [
  { value: 'trending', label: '热门' },
  { value: 'upcome', label: '新生' }
]

const periods = [
  { value: 'day', label: '今日' },
  { value: 'week', label: '本周' },
  { value: 'month', label: '本月' }
]
const langList = [
  { value: 'javascript', label: 'JavaScript', color: 'rgb(241, 224, 90)' },
  { value: 'css', label: 'CSS', color: 'rgb(86, 61, 124)' },
  { value: 'html', label: 'HTML', color: 'rgb(227, 76, 38)' }
]

function getLangColor (lang) {
  return langList.find(item => item.value === lang).color
}

function Projects (props) {
  const langColor = getLangColor(props.lang)
  let list = props.list.map(item => {
    return (
      <Col key={item.id} xl={12} span={24}>
        <a className='project-item' href={item.url} target='_blank'>
          <div className='title'>
            <span className='title-text'>
            {item.username + ' / ' + item.reponame}
            </span>
          </div>
          <div className='desc'>{item.description}</div>
          <div className='meta'>
            <span className='meta-item'><Icon type="star"/> {item.starCount}</span>
            <span className='meta-item'><Icon type="fork"/> {item.forkCount}</span>
            <span className='meta-item'><span style={{ color: langColor }}>
              <i className='icon-circle'></i></span> {item.lang}</span>
          </div>
        </a>
      </Col>
    )
  })
  return (
    <div className='project'>
      <div className='content-navbar bg-primary text-md'>
        <img className='icon' src='github.png'/>
        <span className='navbar-title text-lg text-black'>GitHub</span>
        <div className='flex-grow-1'>
          <Select value={props.category}
                  onChange={props.changeCategory}
                  className='select-border-none select-w-md bg-secondary mr-1'>
            {categories.map(item => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
          <Select value={props.period}
                  onChange={props.changePeriod}
                  className='select-border-none select-w-md bg-secondary'>
            {periods.map(item => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </div>
        <Select value={props.lang}
                onChange={props.changeLang}
                className='select-border-none select-w-md bg-secondary'>
          {langList.map(item => (
            <Option value={item.value} key={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
      </div>
      <Row gutter={[16, 16]} className='content-box' onScroll={scrollLoadMore(props.loadMore)}>
        {list}
        {props.loadEnd && <Col span={24} className='list-end-bar'>已显示全部内容</Col>}
      </Row>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
