import React from "react"
import { render, cleanup } from "react-testing-library"
import Event from "./index"

describe("<Event />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<Event />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
