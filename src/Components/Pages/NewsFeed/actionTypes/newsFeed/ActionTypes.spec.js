import ActionTypes from "./index.js"

describe("ActionTypes", () => {
  it("Should have a GET_NEWS_FEED_REQUEST action type defined", () => {
    expect(ActionTypes.GET_NEWS_FEED_REQUEST).toBeTruthy()
  })
  it("Should have a GET_NEWS_FEED_SUCCESS action type defined", () => {
    expect(ActionTypes.GET_NEWS_FEED_SUCCESS).toBeTruthy()
  })
  it("Should have a GET_NEWS_FEED_FAILURE action type defined", () => {
    expect(ActionTypes.GET_NEWS_FEED_FAILURE).toBeTruthy()
  })
})
