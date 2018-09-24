import { combineReducers } from "redux"
import Theme from "Components/Common/ThemeSwitcher/reducers"
import NewsFeed from "Pages/NewsFeed/reducers/newsFeed"
import UserProfile from "Pages/NewsFeed/reducers/userProfile"

export default combineReducers({
  Theme,
  NewsFeed,
  UserProfile
})
