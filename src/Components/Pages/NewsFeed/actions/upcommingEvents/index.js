import request from "utils/request/index"
import ActionTypes from "../../actionTypes/upcomingEvents"
import sleep from "../helpers"

const getUpcomingEventsRequest = () => {
  return {
    type: ActionTypes.GET_UPCOMING_EVENTS_REQUEST,
    isLoading: true
  }
}

const getUpcomingEventsSuccess = profile => {
  return {
    type: ActionTypes.GET_UPCOMING_EVENTS_SUCCESS,
    isLoading: false,
    profile
  }
}

const getUpcomingEventsFailure = err => {
  return {
    type: ActionTypes.GET_UPCOMING_EVENTS_FAILURE,
    isLoading: false,
    err
  }
}

export default function getUpcomingEvents() {
  return async dispatch => {
    dispatch(getUpcomingEventsRequest())
    try {
      await sleep(500)
      const events = await request("events/index.json")
      dispatch(getUpcomingEventsSuccess(events))
    } catch (err) {
      dispatch(getUpcomingEventsFailure(err))
    }
  }
}
