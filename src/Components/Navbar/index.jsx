import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "img/pinterest-logo.png"
import notifications from "mockData/notifications/index"
import NavLinkBrand from "Components/Navbar/NavLinkBrand"
import SearchBar from "Components/Common/SearchBar"
import NotificationsTray from "Components/Navbar/NotificationsTray"
import ProfileDropdown from "./ProfileDropdown"

import "./NavBar.scss"

const NavBar = () => (
  <nav className="NavBar navbar">
    <div className="navbar-brand">
      <NavLinkBrand />
      <div className="navbar-burger burger">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
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
        <a className="navbar-item">Food</a>
        <a className="navbar-item">Admin</a>
        <a className="navbar-item">More</a>
        <SearchBar />
      </div>
      <div className="navbar-end">
        <NotificationsTray notifications={notifications} />
        <ProfileDropdown />
      </div>
    </div>
  </nav>
)

export default NavBar
