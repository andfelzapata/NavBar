import React from "react"
import { render, cleanup } from "react-testing-library"
import UserSummary from "./index"

describe("<UserSummary />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<UserSummary />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
