import React from "react"
import { render, cleanup } from "react-testing-library"
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import NewsFeed from "./index"

const mockStore = configureMockStore([ReduxThunk])
const store = mockStore({
  Theme: { themeName: "Pinterest" },
  NewsFeed: { feed: [], isLoading: false },
  UserProfile: { profile: {}, isLoading: false }
})

describe("<NewsFeed />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <Provider store={store}>
        <NewsFeed />
      </Provider>
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
