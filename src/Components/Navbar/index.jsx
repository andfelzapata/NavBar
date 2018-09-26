import React, { PureComponent } from "react"
import { NavLink, withRouter } from "react-router-dom"
import classNames from "classnames"
import enhanceWithClickOutside from "react-click-outside"
import NavLinkBrand from "Components/Navbar/NavLinkBrand"
import SearchBar from "Components/Common/SearchBar"
import NotificationsTray from "Components/Navbar/NotificationsTray"
import ProfileDropdown from "./ProfileDropdown"
import "./NavBar.scss"

class NavBar extends PureComponent {
  state = {
    isActive: false
  }

  toggleBurger = () => {
    const { isActive } = this.state
    this.setState({ isActive: !isActive })
  }

  closeBurger() {
    this.setState({ isActive: false })
  }

  handleClickOutside() {
    this.closeBurger()
  }
  render() {
    const { isActive } = this.state
    return (
      <nav className="NavBar navbar">
        <div className="navbar-brand">
          <NavLinkBrand />
          <button
            type="button"
            onClick={this.toggleBurger}
            className={classNames("navbar-burger burger", {
              "is-active": isActive
            })}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={classNames("navbar-menu", { "is-active": isActive })}>
          <div
            className="navbar-start"
            onClick={() => this.closeBurger()}
            onKeyPress={() => this.closeBurger()}
            tabIndex={0}
            role="button"
          >
            <NavLink
              activeClassName="NavLink_Selected"
              className="navbar-item"
              to="/feed"
            >
              News
            </NavLink>
            <NavLink
              activeClassName="NavLink_Selected"
              className="navbar-item"
              to="/people"
            >
              People
            </NavLink>
            <NavLink className="navbar-item" to="/food">
              Food
            </NavLink>
            <NavLink className="navbar-item" to="/admin">
              Admin
            </NavLink>
            <NavLink className="navbar-item" to="/more">
              More
            </NavLink>
            <SearchBar />
          </div>
          <div className="navbar-end">
            <NotificationsTray notifications={[]} />
            <ProfileDropdown />
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(enhanceWithClickOutside(NavBar))
