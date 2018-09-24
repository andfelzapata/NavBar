import React from "react"
import { distanceInWordsToNow } from "date-fns"
import "./FeedHeader.scss"

const FeedHeader = ({ feed: { title, author, updated_at } }) => (
  <div className="FeedHeader">
    <p className="title has-text-weight-normal is-3">{title}</p>
    <p className="subtitle is-6">
      By {author.name} &middot;
      {distanceInWordsToNow(updated_at)} ago
    </p>
  </div>
)

export default FeedHeader
