import React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import NotificationsTray from "./index"
import notifications from "mockData/notifications/index.js"
import "jest-dom/extend-expect"

describe("<NotificationsTray />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <NotificationsTray notifications={notifications} />
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("Should show the number of notifications", () => {
    const { container, queryByText, debug } = render(
      <NotificationsTray notifications={notifications} />
    )
    expect(container).toHaveTextContent("7")
  })
})
