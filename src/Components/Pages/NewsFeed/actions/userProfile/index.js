import request from "utils/request/index"
import ActionTypes from "../../actionTypes/userProfile"
import sleep from "../helpers"

const getUserProfileRequest = () => {
  return {
    type: ActionTypes.GET_USER_PROFILE_REQUEST,
    isLoading: true
  }
}

const getUserProfileSuccess = profile => {
  return {
    type: ActionTypes.GET_USER_PROFILE_SUCCESS,
    isLoading: false,
    profile
  }
}

const getUserProfileFailure = err => {
  return {
    type: ActionTypes.GET_USER_PROFILE_FAILURE,
    isLoading: false,
    err
  }
}

export default function getUserProfile() {
  return async dispatch => {
    dispatch(getUserProfileRequest())
    try {
      await sleep(500)
      const userProfile = await request("userProfile/index.json")
      dispatch(getUserProfileSuccess(userProfile))
    } catch (err) {
      dispatch(getUserProfileFailure(err))
    }
  }
}
