import React, { PureComponent } from "react"
import classNames from "classnames"
import enhanceWithClickOutside from "react-click-outside"
import { NavLink } from "react-router-dom"
import userImage from "img/user@2x.png"
import "./ProfileDropdown.scss"

class ProfileDropdown extends PureComponent {
  state = {
    isActive: false
  }

  toggleDropdown = () => {
    const { isActive } = this.state
    this.setState({ isActive: !isActive })
  }

  handleClickOutside() {
    this.setState({ isActive: false })
  }

  render() {
    const { isActive } = this.state
    return (
      <div
        className={classNames("ProfileDropdown dropdown navbar-item", {
          "is-active": isActive
        })}
      >
        <div className="dropdown-trigger">
          <button
            data-testid="ProfileButton"
            type="button"
            className="button"
            aria-haspopup="true"
            aria-controls="ProfileDropdown"
            onClick={() => this.toggleDropdown()}
          >
            <img className="image" src={userImage} alt="Profile" />
            <span className="icon is-small">
              <i className="fa fa-caret-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="ProfileDropdown" role="menu">
          <div className="dropdown-content">
            <NavLink to="/settings" className="dropdown-item">
              Settings
            </NavLink>
            <NavLink to="/sign-out" className="dropdown-item">
              Sign Out
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default enhanceWithClickOutside(ProfileDropdown)
