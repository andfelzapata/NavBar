import React from "react"
import { render, cleanup } from "react-testing-library"
import PageContainer from "./index"

describe("<PageContainer />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<PageContainer />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
