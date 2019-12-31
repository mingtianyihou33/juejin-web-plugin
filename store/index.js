import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import articleReducer from './reducers/article'
import categoryReducer from './reducers/category'
import projectReducer from './reducers/project'
import { createService } from '../plugins/axios'

const reducer = combineReducers({
  category: categoryReducer, // 顶部select框内容
  article: articleReducer, // 左侧文章列表
  project: projectReducer // 右侧项目列表
})

// 加上api前缀用于代理api开头的接口
export default createStore(reducer, applyMiddleware(thunk.withExtraArgument(createService('/api'))))
