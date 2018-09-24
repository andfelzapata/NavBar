import ActionTypes from "../actionTypes"

const switchThemeRequest = themeName => {
  return {
    type: ActionTypes.SWITCH_THEME,
    themeName
  }
}

export default function switchTheme(themeName) {
  return dispatch => {
    dispatch(switchThemeRequest(themeName))
  }
}
