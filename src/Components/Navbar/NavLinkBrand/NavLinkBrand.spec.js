import React from "react"
import { render, cleanup } from "react-testing-library"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import { BrowserRouter as Router } from "react-router-dom"
import NavLinBrand from "./index"

const mockStore = configureMockStore()
const store = mockStore({ Theme: { themeName: "Pinterest" } })

describe("<NavLinBrand />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <NavLinBrand />
        </Router>
      </Provider>
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
