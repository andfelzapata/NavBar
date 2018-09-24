import React from "react"
import { shape } from "prop-types"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "Components/App"

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: shape({}).isRequired
}

export default Root
