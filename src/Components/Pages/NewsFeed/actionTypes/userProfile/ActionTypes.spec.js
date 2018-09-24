import ActionTypes from "./index.js"

describe("ActionTypes", () => {
  it("Should have a GET_USER_PROFILE_REQUEST action type defined", () => {
    expect(ActionTypes.GET_USER_PROFILE_REQUEST).toBeTruthy()
  })
  it("Should have a GET_USER_PROFILE_SUCCESS action type defined", () => {
    expect(ActionTypes.GET_USER_PROFILE_SUCCESS).toBeTruthy()
  })
  it("Should have a GET_USER_PROFILE_FAILURE action type defined", () => {
    expect(ActionTypes.GET_USER_PROFILE_FAILURE).toBeTruthy()
  })
})
