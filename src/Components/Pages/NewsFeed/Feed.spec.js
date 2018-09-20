import React from "react"
import { render, cleanup } from "react-testing-library"
import NewsFeed from "./index"

describe("<NewsFeed />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<NewsFeed />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
