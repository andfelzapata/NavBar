import React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-dom/extend-expect"
import { BrowserRouter as Router } from "react-router-dom"
import ProfileDropdown from "./index"

describe("<ProfileDropdown />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <Router>
        <ProfileDropdown />
      </Router>
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("Should toggle dropdown", () => {
    const { container, getByTestId } = render(
      <Router>
        <ProfileDropdown />
      </Router>
    )
    const profileButton = getByTestId("ProfileButton")
    const dropdownContainer = container.querySelector(".ProfileDropdown")

    fireEvent.click(profileButton)
    expect(dropdownContainer).toHaveClass("is-active")

    fireEvent.click(profileButton)
    expect(dropdownContainer).not.toHaveClass("is-active")
  })
})
