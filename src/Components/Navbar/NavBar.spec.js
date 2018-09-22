import React from "react"
import { render, cleanup } from "react-testing-library"
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./index"

describe("<NavBar />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <Router>
        <NavBar />
      </Router>
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
