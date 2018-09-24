import React from "react"
import { shape, string } from "prop-types"
import { distanceInWordsToNow } from "date-fns"
import "./FeedHeader.scss"

const FeedHeader = ({ feed: { title, author, updated_at } }) => (
  <div className="FeedHeader">
    <p className="title has-text-weight-normal is-3">{title}</p>
    <p className="subtitle is-6">
      By
      {` ${author.name} `}
      {<span className="Separator">&middot;</span>}
      {distanceInWordsToNow(updated_at)}
      {" ago "}
    </p>
  </div>
)

FeedHeader.propTypes = {
  feed: shape({
    title: string.isRequired,
    updated_at: string.isRequired,
    author: shape({ name: string.isRequired })
  }).isRequired
}

export default FeedHeader
