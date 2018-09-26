import React from "react"
import { render, cleanup } from "react-testing-library"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import configureMockStore from "redux-mock-store"
import mockStore from "__mocks__/mockStore.js"
import App from "./index"

const configureStore = configureMockStore([ReduxThunk])
const store = configureStore(mockStore)

describe("<App />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
