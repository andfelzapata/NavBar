import ActionTypes from "./index.js"

describe("ActionTypes", () => {
  it("Should have a GET_UPCOMING_EVENTS_REQUEST action type defined", () => {
    expect(ActionTypes.GET_UPCOMING_EVENTS_REQUEST).toBeTruthy()
  })
  it("Should have a GET_UPCOMING_EVENTS_SUCCESS action type defined", () => {
    expect(ActionTypes.GET_UPCOMING_EVENTS_SUCCESS).toBeTruthy()
  })
  it("Should have a GET_UPCOMING_EVENTS_FAILURE action type defined", () => {
    expect(ActionTypes.GET_UPCOMING_EVENTS_FAILURE).toBeTruthy()
  })
})
