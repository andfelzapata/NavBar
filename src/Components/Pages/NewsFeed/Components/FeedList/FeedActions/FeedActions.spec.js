import React from "react"
import { render, cleanup } from "react-testing-library"
import FeedActions from "./index"

describe("<FeedActions />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<FeedActions />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
