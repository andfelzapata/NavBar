import React from "react"
import { render, cleanup } from "react-testing-library"
import FeedContent from "./index"

describe("<FeedContent />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<FeedContent content="Hey" />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
