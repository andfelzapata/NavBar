import React from "react"
import { render, cleanup } from "react-testing-library"
import SearchBar from "./index"

describe("<SearchBar />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<SearchBar />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
