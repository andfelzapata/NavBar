import React, { PureComponent } from "react"
import { node } from "prop-types"
import "./PageContainer.scss"

class PageContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.DOMnode = React.createRef()
  }
  componentDidMount() {
    const el = this.DOMnode.current
    el.style.opacity = 0
    el.style.visibility = "hidden"
    setTimeout(() => {
      el.style.transition = "opacity 1300ms ease-in-out"
      el.style.opacity = 1
      el.style.visibility = "visible"
    }, 0)
  }
  render() {
    const { children } = this.props
    return (
      <div ref={this.DOMnode} className="PageContainer container">
        {children}
      </div>
    )
  }
}

PageContainer.propTypes = {
  children: node.isRequired
}

export default PageContainer
