import React from "react"
import { arrayOf, shape, number, string } from "prop-types"
import { doesArrayHaveData } from "utils/hasData"
import FeedHeader from "./FeedHeader"
import FeedIcon from "./FeedIcon"
import FeedActions from "./FeedActions"
import FeedLikes from "./FeedLikes"
import FeedContent from "./FeedContent"
import "./FeedList.scss"

const FeedList = ({ feed }) => (
  <div className="FeedList column is-7">
    <p className="FeedList__Header">LATEST</p>
    <div className="FeedList__Items">
      {doesArrayHaveData(feed) &&
        feed.map(f => (
          <div className="content" key={f.id}>
            <div className="box">
              <div className="level">
                <FeedIcon feed={f} />
                <FeedActions />
              </div>
              <FeedHeader feed={f} />
              <FeedContent content={f.content} />
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
