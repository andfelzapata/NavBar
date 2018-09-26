import React from "react"
import { string } from "prop-types"

const createContentMarkup = content => ({ __html: content })

const FeedContent = ({ content }) => {
  return (
    <div
      className="FeedContent"
      dangerouslySetInnerHTML={createContentMarkup(content)}
    />
  )
}

FeedContent.propTypes = {
  content: string.isRequired
}

export default FeedContent
