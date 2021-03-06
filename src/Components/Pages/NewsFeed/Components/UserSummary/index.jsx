import React, { PureComponent } from "react"
import { func, shape, string } from "prop-types"
import { connect } from "react-redux"
import { doesObjectHaveData } from "utils/hasData"
import getUserProfile from "../../actions/userProfile"
import "./UserSummary.scss"

class UserSummary extends PureComponent {
  componentDidMount() {
    const { getUserProfile } = this.props
    getUserProfile()
  }
  render() {
    const { user } = this.props

    return (
      doesObjectHaveData(user) && (
        <div className="UserSummary">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={user.avatar} alt="User" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-size-4">
                    {`${user.first_name} ${user.last_name}`}
                  </p>
                  <p className="subtitle is-size-6">{user.interests}</p>
                </div>
              </div>
              <div className="content is-size-6">{user.bio}</div>
              <hr />
            </div>
          </div>
        </div>
      )
    )
  }
}

const mapStateToProps = state => ({
  user: state.UserProfile.profile
})

const mapDispatchToProps = {
  getUserProfile
}

UserSummary.propTypes = {
  getUserProfile: func.isRequired,
  user: shape({
    bio: string,
    interests: string,
    first_name: string,
    last_name: string
  }).isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSummary)
