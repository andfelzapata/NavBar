import React from "react"
import { arrayOf, shape, number, string } from "prop-types"
import FeedHeader from "./FeedHeader"
import FeedIcon from "./FeedIcon"
import FeedActions from "./FeedActions"
import FeedLikes from "./FeedLikes"
import "./FeedList.scss"

function createContentMarkup(content) {
  return { __html: content }
}

const FeedList = ({ feed }) => (
  <div className="FeedList column is-7">
    <p className="FeedList__Header">LATEST</p>
    <div className="FeedList__Items">
      {feed.length > 0 &&
        feed.map(f => (
          <div className="content" key={f.id}>
            <div className="box">
              <div className="level">
                <FeedIcon feed={f} />
                <FeedActions />
              </div>
              <FeedHeader feed={f} />
              <div
                className="Feed_Content"
                dangerouslySetInnerHTML={createContentMarkup(f.content)}
              />
              <hr />
              {f.media ? <img src={f.media} alt="Feed" /> : null}
              <FeedLikes feed={f} />
            </div>
          </div>
        ))}
    </div>
  </div>
)

FeedList.propTypes = {
  feed: arrayOf(
    shape({
      id: number.isRequired,
      type: string.isRequired,
      title: string.isRequired,
      likes: number.isRequired,
      content: string.isRequired,
      updated_at: string.isRequired
    })
  ).isRequired
}

export default FeedList
