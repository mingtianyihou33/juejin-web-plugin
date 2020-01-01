import {
  ARTICLE_CHANGE_ORDER,
  ARTICLE_CHANGE_CATEGORY,
  ARTICLE_PUSH_LIST,
  ARTICLE_SET_LIST, ARTICLE_ADD_OFFSET, ARTICLE_INIT_PAGE,
} from '../actionTypes'

export function changeCategory (category) {
  return (dispatch, getState, axios) => {
    dispatch({ type: ARTICLE_CHANGE_CATEGORY, category })
    dispatch({ type: ARTICLE_INIT_PAGE })
    loadArticleList(dispatch, getState, axios)
  }
}

export function changeOrder (order) {
  return (dispatch, getState, axios) => {
    dispatch({ type: ARTICLE_CHANGE_ORDER, order })
    dispatch({ type: ARTICLE_INIT_PAGE })
    loadArticleList(dispatch, getState, axios)
  }
}

export function loadMore () {
  return async (dispatch, getState, axios) => {
    dispatch({ type: ARTICLE_ADD_OFFSET })
    await loadArticleList(dispatch, getState, axios, true)
  }
}

export async function loadArticleList (dispatch, getState, axios, push = false) {
  let { list, ...other } = getState().article
  try {
    let res = await axios.post('resources/gold', other)
    dispatch && (push ? dispatch({ type: ARTICLE_PUSH_LIST, list: res }) : dispatch({
      type: ARTICLE_SET_LIST,
      list: res
    }))
    return res
  } catch (e) {
    console.error(e)
  }
}
