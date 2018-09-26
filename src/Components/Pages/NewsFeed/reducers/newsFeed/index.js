import { createSelector } from "reselect"
import ActionTypes from "../../actionTypes/newsFeed/index"
import { order } from "utils/dates"

const defaultState = {
  feed: [],
  isLoading: false,
  err: null
}

export default function NewsFeedStore(state = defaultState, action) {
  const { type, feed, isLoading, err } = action
  switch (type) {
    case ActionTypes.GET_NEWS_FEED_REQUEST:
      return {
        ...state,
        isLoading
      }
    case ActionTypes.GET_NEWS_FEED_SUCCESS:
      return {
        ...state,
        feed,
        isLoading
      }
    case ActionTypes.GET_NEWS_FEED_FAILURE:
      return {
        ...state,
        isLoading,
        err
      }
    default:
      return state
  }
}

const getNewsFeed = state => state.NewsFeed.feed

const getNewsFeedLoading = state => state.NewsFeed.isLoading

export const newsFeedSelector = createSelector([getNewsFeed], feed => {
  return feed.sort((a, b) => order(a, b)("updated_at")("desc"))
})

export const newsFeedLoadingSelector = createSelector(
  [getNewsFeedLoading],
  feedLoading => feedLoading
)
