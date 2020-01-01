import {
  PROJECT_ADD_OFFSET,
  PROJECT_CHANGE_CATEGORY,
  PROJECT_CHANGE_LANG,
  PROJECT_CHANGE_PERIOD, PROJECT_INIT_PAGE,
  PROJECT_PUSH_LIST,
  PROJECT_SET_LIST
} from '../actionTypes'

export const initState = {
  category: 'trending', // 热门
  period: 'day',// 今日
  lang: 'javascript', // 语言
  offset: 0,
  limit: 30,
  list: [],
  loadEnd: false
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
    case PROJECT_INIT_PAGE:
      state.offset = initState.offset
      state.loadEnd = initState.loadEnd
      break
    case PROJECT_ADD_OFFSET:
      state.offset += state.limit
      break
    case PROJECT_SET_LIST:
      state.list = action.list || []
      break
    case PROJECT_PUSH_LIST:
      if (action.list.length && !state.list.some(item => item.id === action.list[0].id)) {
        state.list = [...state.list, ...action.list]
      } else {
        state.loadEnd = true
      }
      break
  }
  return { ...state }
}
