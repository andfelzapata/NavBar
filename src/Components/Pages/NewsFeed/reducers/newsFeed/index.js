import { createSelector } from "reselect"
import ActionTypes from "../../actionTypes/newsFeed/index"

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

export const newsFeedSelector = createSelector([getNewsFeed], feed => feed)

export const newsFeedLoadingSelector = createSelector(
  [getNewsFeedLoading],
  feedLoading => feedLoading
)
