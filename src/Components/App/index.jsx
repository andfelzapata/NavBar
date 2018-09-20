import React from "react"
import { Route, NavLink } from "react-router-dom"
import NewsFeed from "Components/Pages/NewsFeed"
import Profile from "Components/Pages/Profile"

const App = () => (
  <div className="App">
    <ul>
      <li>
        <NavLink to="/feed">News</NavLink>
      </li>
      <li>
        <NavLink to="/profile">People</NavLink>
      </li>
    </ul>
    <Route path="/feed" component={NewsFeed} />
    <Route path="/profile" component={Profile} />
  </div>
)

export default App
