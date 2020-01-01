import {
  ARTICLE_CHANGE_ORDER,
  ARTICLE_CHANGE_CATEGORY,
  ARTICLE_PUSH_LIST,
  ARTICLE_SET_LIST,
  ARTICLE_ADD_OFFSET, ARTICLE_INIT_PAGE
} from '../actionTypes'

export const initState = {
  category: 'frontend',
  order: 'heat',
  offset: 0,
  limit: 30,
  list: [],
  loadEnd: false
}

export default function (state = initState, action) {
  switch (action.type) {
    case ARTICLE_CHANGE_CATEGORY:
      state.category = action.category
      break
    case ARTICLE_CHANGE_ORDER:
      state.order = action.order
      break
    case ARTICLE_INIT_PAGE:
      state.offset = initState.offset
      state.loadEnd = initState.loadEnd
      break
    case ARTICLE_ADD_OFFSET:
      state.offset += state.limit
      break
    case ARTICLE_SET_LIST:
      state.list = action.list || []
      break
    case ARTICLE_PUSH_LIST:
      if (action.list.length && !state.list.some(item => item.id === action.list[0].id)) {
        state.list = [...state.list, ...action.list]
      } else {
        state.loadEnd = true
      }
      break
  }
  return { ...state }
}
