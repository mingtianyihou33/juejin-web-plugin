import {
  ARTICLE_CHANGE_ORDER,
  ARTICLE_CHANGE_CATEGORY,
  ARTICLE_PUSH_LIST,
  ARTICLE_SET_LIST,
  CHANGE_CATEGORY
} from '../actionTypes'
import fetch from '../../plugins/fetch'

const initState = {
  category: 'frontend',
  order: 'heat',// time
  offset: 0,
  limit: 30,
  list: []
}

export function changeCategory(category) {
  return (dispatch, getState) => {
    dispatch({type: ARTICLE_CHANGE_CATEGORY, category})
  }
}

export function changeOrder(order) {
  return (dispatch, getState) => {
    dispatch({type: ARTICLE_CHANGE_ORDER, order})
  }
}

export function loadArticleList(dispatch) {
  fetch('resources/gold')
}
