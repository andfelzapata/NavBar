import React, { PureComponent } from "react"
import userImage from "img/user@2x.png"
import "./ProfileDropdown.scss"

class ProfileDropdown extends PureComponent {
  render() {
    return (
      <div className="ProfileDropdown dropdown navbar-item">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="ProfileDropdown"
          >
            <img className="image" src={userImage} />
            <span className="icon is-small">
              <i className="fa fa-caret-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="ProfileDropdown" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Settings
            </a>
            <a href="#" className="dropdown-item">
              Sign Out
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileDropdown
