import React, { PureComponent } from "react"
import { arrayOf, func, shape, bool } from "prop-types"
import { connect } from "react-redux"
import Spinner from "Components/Common/Spinner"
import PageContainer from "Pages/PageContainer"
import getNewsFeed from "./actions/newsFeed"
import { newsFeedSelector, newsFeedLoadingSelector } from "./reducers/newsFeed"
import { userProfileLoadingSelector } from "./reducers/userProfile"
import FeedList from "./Components/FeedList"
import UserSummary from "./Components/UserSummary"
import UpcomingEvents from "./Components/UpcomingEvents"

class NewsFeed extends PureComponent {
  componentDidMount() {
    const { getNewsFeed } = this.props
    getNewsFeed()
  }
  render() {
    const { feed, feedLoading, userLoading } = this.props
    return (
      <PageContainer>
        <div className="columns">
          <div className="column" />
          <div className="column is-3">
            <UserSummary />
            <UpcomingEvents />
          </div>
          <FeedList feed={feed} />
          <div className="column" />
        </div>
        <Spinner isLoading={feedLoading || userLoading} />
      </PageContainer>
    )
  }
}

const mapStateToProps = state => ({
  feed: newsFeedSelector(state),
  feedLoading: newsFeedLoadingSelector(state),
  userLoading: userProfileLoadingSelector(state)
})

const mapDispatchToProps = {
  getNewsFeed
}

NewsFeed.propTypes = {
  feed: arrayOf(shape({})).isRequired,
  feedLoading: bool.isRequired,
  getNewsFeed: func.isRequired,
  userLoading: bool.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed)
