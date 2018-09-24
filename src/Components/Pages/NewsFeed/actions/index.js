import ActionTypes from "../actionTypes"
import request from "utils/request"

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const getNewsFeedRequest = () => {
  return {
    type: ActionTypes.GET_NEWS_FEED_REQUEST,
    isLoading: true
  }
}

const getNewsFeedSuccess = feed => {
  return {
    type: ActionTypes.GET_NEWS_FEED_SUCCESS,
    isLoading: false,
    feed
  }
}

const getNewsFeedFailure = err => {
  return {
    type: ActionTypes.GET_NEWS_FEED_FAILURE,
    isLoading: false,
    err
  }
}

export default function getNewsFeed() {
  return async dispatch => {
    dispatch(getNewsFeedRequest())
    try {
      await sleep(500)
      const feed = await request("feed/index.json")
      dispatch(getNewsFeedSuccess(feed))
    } catch (err) {
      dispatch(getNewsFeedFailure(err))
    }
  }
}
