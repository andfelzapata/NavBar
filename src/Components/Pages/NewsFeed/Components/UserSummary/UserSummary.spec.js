import React from "react"
import { render, cleanup } from "react-testing-library"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import configureMockStore from "redux-mock-store"
import { UserSummary } from "./index"

const createProps = () => ({
  getUserProfile: jest.fn,
  user: {
    first_name: "",
    last_name: "",
    interests: "",
    bio: ""
  }
})

describe("<UserSummary />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<UserSummary {...createProps()} />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
