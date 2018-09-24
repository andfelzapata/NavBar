import React from "react"
import { shape, string } from "prop-types"
import ProductNewsIcon from "../ProductNewsIcon"
import EventIcon from "../EventIcon"
import "./FeedIcon.scss"

const FeedIcon = ({ feed: { type } }) => (
  <div className="FeedIcon level-left">
    <div className="level-item">
      {type === "Product News" ? <ProductNewsIcon /> : <EventIcon />}
      <span className="FeedIcon__Text">{type}</span>
    </div>
  </div>
)

FeedIcon.propTypes = {
  feed: shape({
    type: string.isRequired
  }).isRequired
}

export default FeedIcon
