import {
  ARTICLE_CHANGE_ORDER,
  ARTICLE_CHANGE_CATEGORY,
  ARTICLE_PUSH_LIST,
  ARTICLE_SET_LIST,
  CHANGE_CATEGORY
} from '../actionTypes'

const initState = {
  category: 'frontend',
  order: 'heat',// time
  offset: 0,
  limit: 30,
  list: []
}

export function changeCategory (category) {
  return (dispatch, getState, axios) => {
    dispatch({ type: ARTICLE_CHANGE_CATEGORY, category })
    loadArticleList(dispatch, getState, axios)
  }
}

export function changeOrder (order) {
  return (dispatch, getState) => {
    dispatch({ type: ARTICLE_CHANGE_ORDER, order })
  }
}

export async function loadArticleList (dispatch, getState, axios) {
  let { list, ...other } = getState().article
  try {
    let res = await axios.post('resources/gold', other)
    console.log(res)
    dispatch({ type: ARTICLE_SET_LIST, list: res })
  } catch (e) {
    console.error(e)
  }
}
