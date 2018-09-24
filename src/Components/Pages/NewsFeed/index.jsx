import React, { PureComponent } from "react"
import { connect } from "react-redux"
import getNewsFeed from "./actions"
import { newsFeedSelector } from "./reducers"
import PageContainer from "Pages/PageContainer"

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed)
