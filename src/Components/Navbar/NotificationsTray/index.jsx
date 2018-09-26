import React, { PureComponent } from "react"
import { arrayOf, shape, number, string } from "prop-types"
import { connect } from "react-redux"
import { doesArrayHaveData } from "utils/hasData"
import { notificationsSelector } from "./reducers"
import getNotifications from "./actions"
import "./NotificationsTray.scss"

export class NotificationsTray extends PureComponent {
  componentDidMount() {
    this.props.getNotifications()
  }
  render() {
    const { notifications } = this.props
    return (
      <div className="NotificationsTray navbar-item">
        <button
          className="button"
          type="button"
          onClick={ev => ev.preventDefault()}
        >
          <i className="fa fa-bell" />
          {doesArrayHaveData(notifications) && (
            <span className="Notifications__Count">
              {notifications.length}
              {"+"}
            </span>
          )}
        </button>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  notifications: notificationsSelector(state)
})

const mapDispatchToProps = {
  getNotifications
}

NotificationsTray.propTypes = {
  notifications: arrayOf(
    shape({
      id: number.isRequired,
      notification: string.isRequired,
      created_at: string.isReqired,
      type: string.isRequired
    })
  ).isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsTray)
