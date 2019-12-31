import {
  CHANGE_CATEGORY,
} from '../actionTypes'

export function changeCategory(dispatch, category) {
  dispatch({type: CHANGE_CATEGORY, category})
}
