import React from "react"
import { render, cleanup } from "react-testing-library"
import { BrowserRouter as Router } from "react-router-dom"
import NavLinBrand from "./index"

describe("<NavLinBrand />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <Router>
        <NavLinBrand />
      </Router>
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
