import { request, sleep } from "utils/request"
import ActionTypes from "../actionTypes"

const getNotificationsRequest = () => {
  return {
    type: ActionTypes.GET_NOTIFICATIONS_REQUEST,
    isLoading: true
  }
}

const getNotificationsSuccess = notifications => {
  return {
    type: ActionTypes.GET_NOTIFICATIONS_SUCCESS,
    isLoading: false,
    notifications
  }
}

const getNotificationsFailure = err => {
  return {
    type: ActionTypes.GET_NOTIFICATIONS_FAILURE,
    isLoading: false,
    err
  }
}

export default function getNotifications() {
  return async dispatch => {
    dispatch(getNotificationsRequest())
    try {
      await sleep(500)
      const notifications = await request("notifications/index.json")
      dispatch(getNotificationsSuccess(notifications))
    } catch (err) {
      dispatch(getNotificationsFailure(err))
    }
  }
}
