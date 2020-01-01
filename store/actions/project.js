import {
  PROJECT_SET_LIST,
  PROJECT_CHANGE_PERIOD,
  PROJECT_CHANGE_CATEGORY,
  PROJECT_CHANGE_LANG,
  PROJECT_ADD_OFFSET,
  PROJECT_PUSH_LIST, PROJECT_INIT_PAGE
} from '../actionTypes'

export function changeCategory (category) {
  return (dispatch, getState, axios) => {
    dispatch({ type: PROJECT_CHANGE_CATEGORY, category })
    dispatch({ type: PROJECT_INIT_PAGE })
    loadProjectList(dispatch, getState, axios)
  }
}

export function changePeriod (period) {
  return (dispatch, getState, axios) => {
    dispatch({ type: PROJECT_CHANGE_PERIOD, period })
    dispatch({ type: PROJECT_INIT_PAGE })
    loadProjectList(dispatch, getState, axios)
  }
}

export function changeLang (lang) {
  return (dispatch, getState, axios) => {
    dispatch({ type: PROJECT_CHANGE_LANG, lang })
    loadProjectList(dispatch, getState, axios)
  }
}

export function loadMore () {
  return async (dispatch, getState, axios) => {
    dispatch({ type: PROJECT_ADD_OFFSET })
    await loadProjectList(dispatch, getState, axios, true)
  }
}

export async function loadProjectList (dispatch, getState, axios, push = false) {
  let { list, ...other } = getState().project
  try {
    let res = await axios.post('resources/github', other)
    dispatch && (push ? dispatch({ type: PROJECT_PUSH_LIST, list: res }) : dispatch({
      type: PROJECT_SET_LIST,
      list: res
    }))
    return res
  } catch (e) {
    console.error(e)
  }
}
