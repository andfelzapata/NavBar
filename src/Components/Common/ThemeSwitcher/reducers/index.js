import { createSelector } from "reselect"
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

const getCurrentTheme = state => state.Theme.themeName

export const currentThemeSelector = createSelector(
  [getCurrentTheme],
  themeName => themeName
)
