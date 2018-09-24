import React from "react"
import { render, cleanup } from "react-testing-library"
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./index"

const mockStore = configureMockStore()
const store = mockStore({ Theme: { themeName: "Pinterest" } })

describe("<NavBar />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
