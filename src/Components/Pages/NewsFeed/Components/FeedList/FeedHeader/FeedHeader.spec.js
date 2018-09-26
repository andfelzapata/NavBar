import React from "react"
import { render, cleanup } from "react-testing-library"
import FeedHeader from "./index"

const props = { title: "", updated_at: "", author: { name: "" } }

describe("<FeedHeader />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<FeedHeader feed={props} />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
