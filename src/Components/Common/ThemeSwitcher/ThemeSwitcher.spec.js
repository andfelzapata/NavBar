import React from "react"
import { render, cleanup } from "react-testing-library"
import { Provider } from "react-redux"
import { ThemeSwitcher } from "./index"

const createProps = () => ({
  theme: "Pinterest",
  switchTheme: jest.fn()
})

describe("<ThemeSwitcher />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<ThemeSwitcher {...createProps()} />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
