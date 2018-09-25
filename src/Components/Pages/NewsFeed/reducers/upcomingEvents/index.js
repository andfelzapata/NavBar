import ActionTypes from "../../actionTypes/upcomingEvents"

const defaultState = {
  events: [],
  isLoading: false,
  err: null
}

export default function UpcomingEventsStore(state = defaultState, action) {
  const { type, events, isLoading, err } = action
  switch (type) {
    case ActionTypes.GET_UPCOMING_EVENTS_REQUEST:
      return {
        ...state,
        isLoading
      }
    case ActionTypes.GET_UPCOMING_EVENTS_SUCCESS:
      return {
        ...state,
        events,
        isLoading
      }
    case ActionTypes.GET_UPCOMING_EVENTS_FAILURE:
      return {
        ...state,
        isLoading,
        err
      }
    default:
      return state
  }
}
