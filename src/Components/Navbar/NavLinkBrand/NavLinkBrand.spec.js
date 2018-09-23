import React from "react"
import { render, cleanup } from "react-testing-library"
import NavLinBrand from "./index"

describe("<NavLinBrand />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<NavLinBrand />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
