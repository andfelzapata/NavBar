import React from "react"
import { Route } from "react-router-dom"
import NewsFeed from "Components/Pages/NewsFeed"
import People from "Components/Pages/People"
import Profile from "Components/Pages/Profile"
import NavBar from "Components/Navbar"
import "./App.scss"

const App = () => (
  <div className="App">
    <NavBar />
    <Route path="/feed" component={NewsFeed} />
    <Route path="/people" component={People} />
  </div>
)

export default App
