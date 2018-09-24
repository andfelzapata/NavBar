import React from "react"
import { render, cleanup } from "react-testing-library"
import { BrowserRouter as Router } from "react-router-dom"
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import App from "./index"

const mockStore = configureMockStore()
const store = mockStore({ Theme: { themeName: "Pinterest" } })

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
