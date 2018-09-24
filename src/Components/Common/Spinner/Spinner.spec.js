import React from "react"
import { render, cleanup } from "react-testing-library"
import Spinner from "./index"

describe("<Spinner />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
