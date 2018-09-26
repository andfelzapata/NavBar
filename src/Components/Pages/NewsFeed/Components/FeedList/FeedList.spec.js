import React from "react"
import { render, cleanup } from "react-testing-library"
import FeedList from "./index"

describe("<FeedList />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<FeedList feed={[]} />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
