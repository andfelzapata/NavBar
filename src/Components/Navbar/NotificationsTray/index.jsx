import React from "react"
import { arrayOf, shape, number, string } from "prop-types"
import "./NotificationsTray.scss"

const NotificationsTray = ({ notifications }) => (
  <div className="NotificationsTray navbar-item">
    <a className="button">
      <i className="fa fa-bell" />
      {notifications.length > 0 && (
        <span className="Notifications__Count">{notifications.length} +</span>
      )}
    </a>
  </div>
)

NotificationsTray.propTypes = {
  notifications: arrayOf(
    shape({
      id: number.isRequired,
      content: string.isRequired,
      created_at: string.isReqired,
      type: string.isRequired
    })
  ).isRequired
}

export default NotificationsTray
