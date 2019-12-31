import {
  PROJECT_CHANGE_CATEGORY, PROJECT_CHANGE_LANG, PROJECT_CHANGE_PERIOD, PROJECT_PUSH_LIST, PROJECT_SET_LIST
} from '../actionTypes'

const initState = {
  category: 'trending', // 热门
  period: 'day',// 今日
  lang: 'javascript', // 语言
  offset: 0,
  limit: 30,
  list: []
}
export default function (state = initState, action) {
  switch (action.type) {
    case PROJECT_CHANGE_CATEGORY:
      state.category = action.category
      break
    case PROJECT_CHANGE_PERIOD:
      state.period = action.period
      break
    case PROJECT_CHANGE_LANG:
      state.lang = action.lang
      break
    case PROJECT_SET_LIST:
      state.list = action.list || []
      break
    case PROJECT_PUSH_LIST:
      state.list.push(...action.list)
      break
  }
  return {...state}
}
