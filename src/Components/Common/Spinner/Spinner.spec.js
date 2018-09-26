import React from "react"
import { render, cleanup } from "react-testing-library"
import "jest-dom/extend-expect"
import Spinner from "./index"

describe("<Spinner />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<Spinner isLoading={true} />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("Should be visible when isLoading true", () => {
    const { container } = render(<Spinner isLoading={true} />)
    expect(container.firstChild).toHaveStyle("display: block")
  })

  it("Should be not visible when isLoading false", () => {
    const { container } = render(<Spinner isLoading={false} />)
    expect(container.firstChild).toHaveStyle("display: none")
  })
})
