import React from "react"
import { render, cleanup } from "react-testing-library"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import configureMockStore from "redux-mock-store"
import mockStore from "__mocks__/mockStore.js"
import UserSummary from "./index"

const configureStore = configureMockStore([ReduxThunk])
const store = configureStore(mockStore)

describe("<UserSummary />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <Provider store={store}>
        <UserSummary />
      </Provider>
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
