import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import articleReducer from './reducers/article'
import categoryReducer from './reducers/category'
import projectReducer from './reducers/project'

const reducer = combineReducers({
  category: categoryReducer, // 顶部select框内容
  article: articleReducer, // 左侧文章列表
  project: projectReducer // 右侧项目列表
})

const store = createStore(reducer, applyMiddleware(thunk))
export default store
