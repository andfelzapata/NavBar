import ActionTypes from "../actionTypes"

const defaultState = {
  themeName: "Pinterest"
}

export default function ThemeStore(state = defaultState, action) {
  const { type, themeName } = action
  switch (type) {
    case ActionTypes.SWITCH_THEME:
      return {
        ...state,
        themeName
      }
    default:
      return state
  }
}
