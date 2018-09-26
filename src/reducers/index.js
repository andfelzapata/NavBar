import { combineReducers } from "redux"
import NewsFeed from "Pages/NewsFeed/reducers/newsFeed"
import Theme from "Components/Common/ThemeSwitcher/reducers"
import UserProfile from "Pages/NewsFeed/reducers/userProfile"
import UpcomingEvents from "Pages/NewsFeed/reducers/upcomingEvents"
import Notifications from "Components/Navbar/NotificationsTray/reducers"

export default combineReducers({
  Theme,
  NewsFeed,
  UserProfile,
  Notifications,
  UpcomingEvents
})
