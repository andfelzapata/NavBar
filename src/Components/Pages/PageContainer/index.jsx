import React from "react"
import { node } from "prop-types"
import "./PageContainer.scss"

const PageContainer = ({ children }) => (
  <div className="PageContainer container">{children}</div>
)

PageContainer.propTypes = {
  children: node.isRequired
}

export default PageContainer
