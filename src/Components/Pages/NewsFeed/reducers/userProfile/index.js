import { createSelector } from "reselect"
import ActionTypes from "../../actionTypes/userProfile/index"

const defaultState = {
  profile: [],
  isLoading: false,
  err: null
}

export default function UserProfileStore(state = defaultState, action) {
  const { type, profile, isLoading, err } = action
  switch (type) {
    case ActionTypes.GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        isLoading
      }
    case ActionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile,
        isLoading
      }
    case ActionTypes.GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        isLoading,
        err
      }
    default:
      return state
  }
}

const getUserProfile = state => state.UserProfile.profile

const getUserProfileLoading = state => state.UserProfile.isLoading

export const userProfileSelector = createSelector(
  [getUserProfile],
  profile => profile
)

export const userProfileLoadingSelector = createSelector(
  [getUserProfileLoading],
  userProfileLoading => userProfileLoading
)
