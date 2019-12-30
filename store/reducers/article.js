import { ARTICLE_CHANGE_ORDER, ARTICLE_CHANGE_CATEGORY, ARTICLE_PUSH_LIST, ARTICLE_SET_LIST } from '../actionTypes'

const initState = {
  category: 'frontend',
  order: 'heat',
  offset: 0,
  limit: 30,
  list: []
}

export default function (state = initState, action) {
  switch (action.type) {
    case ARTICLE_CHANGE_CATEGORY:
      state.category = action.category
      break
    case ARTICLE_CHANGE_ORDER:
      state.order = action.order
      break
    case ARTICLE_SET_LIST:
      state.list = action.list || []
      break
    case ARTICLE_PUSH_LIST:
      state.list.push(...action.list)
      break
  }
  return state
}
