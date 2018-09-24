import React, { PureComponent } from "react"
import { arrayOf, func, shape } from "prop-types"
import { connect } from "react-redux"
import PageContainer from "Pages/PageContainer"
import getNewsFeed from "./actions"
import { newsFeedSelector } from "./reducers"

class NewsFeed extends PureComponent {
  componentDidMount() {
    const { getNewsFeed } = this.props
    getNewsFeed()
  }
  render() {
    const { feed } = this.props
    return <PageContainer>{feed.map(f => f.content)}</PageContainer>
  }
}

const mapStateToProps = state => ({
  feed: newsFeedSelector(state)
})

const mapDispatchToProps = {
  getNewsFeed
}

NewsFeed.propTypes = {
  feed: arrayOf(shape({})).isRequired,
  getNewsFeed: func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed)
