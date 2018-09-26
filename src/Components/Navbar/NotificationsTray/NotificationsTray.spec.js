import React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-dom/extend-expect"
import { NotificationsTray } from "./index"

const createProps = () => ({
  notifications: [
    {
      id: 1,
      notification: "hey",
      created_at: new Date(),
      type: "feed"
    },
    {
      id: 2,
      notification: "ho",
      created_at: new Date(),
      type: "feed"
    }
  ],
  getNotifications: jest.fn()
})

describe("<NotificationsTray />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<NotificationsTray {...createProps()} />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("Should show the number of notifications", () => {
    const { container, queryByText, debug } = render(
      <NotificationsTray {...createProps()} />
    )
    expect(container).toHaveTextContent("2")
  })
})
