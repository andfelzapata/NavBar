import React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
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

  it("Should toggle current theme", () => {
    let props = {
      ...createProps(),
      theme: "Pinterest"
    }
    const { container, rerender } = render(<ThemeSwitcher {...props} />)

    const checkbox = container.querySelector("#themeSwitcherButton")

    fireEvent.click(checkbox)
    expect(props.switchTheme).toHaveBeenCalledTimes(1)
    expect(props.switchTheme).toHaveBeenCalledWith("Square")

    props = {
      ...createProps(),
      theme: "Square"
    }
    rerender(<ThemeSwitcher {...props} />)
    fireEvent.click(checkbox)
    expect(props.switchTheme).toHaveBeenCalledTimes(1)
    expect(props.switchTheme).toHaveBeenCalledWith("Pinterest")
  })
})
