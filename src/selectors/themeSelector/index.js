import { createSelector } from "reselect"

const getCurrentTheme = state => state.Theme.themeName

export default createSelector([getCurrentTheme], themeName => themeName)
