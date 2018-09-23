import React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import ProfileDropdown from "./index"
import "jest-dom/extend-expect"

describe("<ProfileDropdown />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<ProfileDropdown />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("Should toggle dropdown", () => {
    const { container, getByTestId, debug } = render(<ProfileDropdown />)
    const profileButton = getByTestId("ProfileButton")
    const dropdownContainer = container.querySelector(".ProfileDropdown")

    fireEvent.click(profileButton)
    expect(dropdownContainer).toHaveClass("is-active")

    fireEvent.click(profileButton)
    expect(dropdownContainer).not.toHaveClass("is-active")
  })
})
