import React from "react"
import { render, cleanup } from "react-testing-library"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import configureMockStore from "redux-mock-store"
import UpcomingEvents from "./index"

const mockStore = configureMockStore([ReduxThunk])
const store = mockStore({
  Theme: { themeName: "Pinterest" },
  NewsFeed: { feed: [], isLoading: false },
  UserProfile: {
    profile: { bio: "", interests: "", first_name: "", last_name: "" },
    isLoading: false
  },
  UpcomingEvents: { events: [], isLoading: false }
})

describe("<UpcomingEvents />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <Provider store={store}>
        <UpcomingEvents />
      </Provider>
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
