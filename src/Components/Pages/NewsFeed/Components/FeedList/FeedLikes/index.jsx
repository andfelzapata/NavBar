import React from "react"
import { shape, number } from "prop-types"
import "./FeedLikes.scss"

const colleagues = likes => (likes > 1 ? "Colleagues" : "Colleague")

const FeedLikes = ({ feed: { likes } }) => (
  <span className="FeedLikes">
    <span className="Likes__Icon">
      <span className="icon">
        {likes > 0 && <i className="fa fa-heart" />}
        {likes === 0 && <i className="fa fa-heart-o" />}
      </span>
    </span>
    <span className="Likes__Count is-size-6">
      {likes > 0 && (
        <span>
          {`${likes} `}
          {colleagues(likes)}
          {" liked this"}
        </span>
      )}
    </span>
  </span>
)

FeedLikes.propTypes = {
  feed: shape({
    likes: number
  }).isRequired
}

export default FeedLikes
