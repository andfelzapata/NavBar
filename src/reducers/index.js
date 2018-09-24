import { combineReducers } from "redux"
import Theme from "Components/Common/ThemeSwitcher/reducers"
import NewsFeed from "Pages/NewsFeed/reducers"

export default combineReducers({
  Theme,
  NewsFeed
})
