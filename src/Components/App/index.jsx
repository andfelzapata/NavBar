import React from "react"
import { string } from "prop-types"
import { Route, Switch, withRouter } from "react-router-dom"
import NewsFeed from "Components/Pages/NewsFeed"
import People from "Components/Pages/People"
import Profile from "Components/Pages/Profile"
import NavBar from "Components/Navbar"
import PageContainer from "Pages/PageContainer"
import ThemeSwitcher from "Components/Common/ThemeSwitcher"
import { connect } from "react-redux"
import { currentThemeSelector } from "selectors"
import "./App.scss"

export const App = ({ theme }) => (
  <div className={`App ${theme}__Theme`}>
    <NavBar />
    <Switch>
      <Route path="/" exact component={NewsFeed} />
      <Route path="/feed" component={NewsFeed} />
      <Route path="/people" component={People} />
      <Route
        path="/*"
        component={() => (
          <PageContainer>
            <p className="NotImplemented is-size-5">Not Yet Implemented</p>
          </PageContainer>
        )}
      />
    </Switch>
    <footer>
      <ThemeSwitcher />
    </footer>
  </div>
)

const mapStateToProps = state => ({
  theme: currentThemeSelector(state)
})

App.propTypes = {
  theme: string.isRequired
}

export default withRouter(connect(mapStateToProps)(App))
