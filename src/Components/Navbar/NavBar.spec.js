import React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./index"
import "jest-dom/extend-expect"

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

  it("Should toggle burger menu", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    )
    const burgerButton = container.querySelector("button")
    const navbarMenu = container.querySelector(".navbar-menu")

    fireEvent.click(burgerButton)
    expect(burgerButton).toHaveClass("is-active")
    expect(burgerButton).toHaveClass("is-active")

    fireEvent.click(burgerButton)
    expect(burgerButton).not.toHaveClass("is-active")
    expect(navbarMenu).not.toHaveClass("is-active")
  })
})
