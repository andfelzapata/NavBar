import React, { PureComponent } from "react"
import { arrayOf, func, shape, bool } from "prop-types"
import { connect } from "react-redux"
import Spinner from "Components/Common/Spinner"
import PageContainer from "Pages/PageContainer"
import getNewsFeed from "./actions/newsFeed"
import { newsFeedSelector, newsFeedLoadingSelector } from "./reducers/newsFeed"
import FeedList from "./Components/FeedList"
import UserSummary from "./Components/UserSummary"

class NewsFeed extends PureComponent {
  componentDidMount() {
    const { getNewsFeed } = this.props
    getNewsFeed()
  }
  render() {
    const { feed, feedLoading } = this.props
    return (
      <PageContainer>
        <div className="columns">
          <div className="column" />

          <div className="column is-3">
            <UserSummary />
          </div>

          <FeedList feed={feed} />
          <div className="column" />
        </div>
        <Spinner isLoading={feedLoading} />
      </PageContainer>
    )
  }
}

const mapStateToProps = state => ({
  feed: newsFeedSelector(state),
  feedLoading: newsFeedLoadingSelector(state)
})

const mapDispatchToProps = {
  getNewsFeed
}

NewsFeed.propTypes = {
  feed: arrayOf(shape({})).isRequired,
  feedLoading: bool.isRequired,
  getNewsFeed: func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed)
