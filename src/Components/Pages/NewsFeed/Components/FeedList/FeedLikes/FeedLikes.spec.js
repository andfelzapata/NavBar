import React from "react"
import { render, cleanup } from "react-testing-library"
import FeedLikes from "./index"

describe("<FeedLikes />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<FeedLikes />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
