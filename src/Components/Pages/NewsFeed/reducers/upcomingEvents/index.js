import { createSelector } from "reselect"
import { order } from "utils/dates"
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

const getEvents = state => state.UpcomingEvents.events

const getEventsLoading = state => state.UpcomingEvents.isLoading

export const eventsSelector = createSelector([getEvents], feed => {
  return feed.sort((a, b) => order(a, b)("date")("asc"))
})

export const eventsLoadingSelector = createSelector(
  [getEventsLoading],
  eventsLoading => eventsLoading
)
