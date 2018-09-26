import React from "react"
import { render, cleanup } from "react-testing-library"
import { BrowserRouter as Router } from "react-router-dom"
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import App from "./index"

const mockStore = configureMockStore([ReduxThunk])
const store = mockStore({
  Theme: { themeName: "Pinterest" },
  NewsFeed: { feed: [], isLoading: false },
  UserProfile: { profile: {}, isLoading: false }
})

describe("<App />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
