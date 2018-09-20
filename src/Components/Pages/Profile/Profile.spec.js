import React from "react"
import { render, cleanup } from "react-testing-library"
import Profile from "./index"

describe("<Profile />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<Profile />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
