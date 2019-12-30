import { createStore, combineReducers } from 'redux'
import articleReducer from './reducers/article'
import categoryReducer from './reducers/category'
import projectReducer from './reducers/project'

const reducer = combineReducers({
  category: articleReducer, // 顶部select框内容
  article: categoryReducer, // 左侧文章列表
  project: projectReducer // 右侧项目列表
})

const store = createStore(reducer)
export default store
