import React from "react"
import { render, cleanup } from "react-testing-library"
import ProfileDropdown from "./index"

describe("<ProfileDropdown />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<ProfileDropdown />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
