import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "img/pinterest-logo.png"
import NavLinkBrand from "Components/Navbar/NavLinkBrand"
import SearchBar from "Components/Common/SearchBar"
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
          className="navbar-item is-size-7"
          to="/feed"
        >
          News
        </NavLink>
        <NavLink
          activeClassName="NavLink_Selected"
          className="navbar-item is-size-7"
          to="/people"
        >
          People
        </NavLink>
        <a className="navbar-item is-size-7">Food</a>
        <a className="navbar-item is-size-7">Admin</a>
        <a className="navbar-item is-size-7">More</a>
        <SearchBar />
      </div>
      <div className="navbar-end" />
    </div>
  </nav>
)

export default NavBar
