import ActionTypes from "./index.js"

describe("ActionTypes", () => {
  it("Should have a GET_NOTIFICATIONS_REQUEST action type defined", () => {
    expect(ActionTypes.GET_NOTIFICATIONS_REQUEST).toBeTruthy()
  })
  it("Should have a GET_NOTIFICATIONS_SUCCESS action type defined", () => {
    expect(ActionTypes.GET_NOTIFICATIONS_SUCCESS).toBeTruthy()
  })
  it("Should have a GET_NOTIFICATIONS_FAILURE action type defined", () => {
    expect(ActionTypes.GET_NOTIFICATIONS_FAILURE).toBeTruthy()
  })
})
