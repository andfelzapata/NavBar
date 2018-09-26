import { createSelector } from "reselect"
import { order } from "utils/dates"
import ActionTypes from "../actionTypes"

const defaultState = {
  notifications: [],
  isLoading: false,
  err: null
}

export default function NotificationsStore(state = defaultState, action) {
  const { type, notifications, isLoading, err } = action
  switch (type) {
    case ActionTypes.GET_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        isLoading
      }
    case ActionTypes.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications,
        isLoading
      }
    case ActionTypes.GET_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        isLoading,
        err
      }
    default:
      return state
  }
}

const getNotifications = state => state.Notifications.notifications

const getNotificationsLoading = state => state.Notifications.isLoading

export const notificationsSelector = createSelector(
  [getNotifications],
  notifications => {
    return notifications.sort((a, b) => order(a, b)("updated_at")("desc"))
  }
)

export const notificationsLoadingSelector = createSelector(
  [getNotificationsLoading],
  notificationsLoading => notificationsLoading
)
