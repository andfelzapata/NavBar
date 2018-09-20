import React from "react"
import { render, cleanup } from "react-testing-library"
import People from "./index"

describe("<People />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<People />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
