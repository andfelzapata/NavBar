import React from "react"
import { render, cleanup } from "react-testing-library"
import FeedHeader from "./index"

describe("<FeedHeader />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<FeedHeader />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
