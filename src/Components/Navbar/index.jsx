import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "img/pinterest-logo.png"
import NavLinkBrand from "Components/Navbar/NavLinkBrand"
import SearchBar from "Components/Common/SearchBar"

const NavBar = () => (
  <nav className="navbar is-transparent">
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
        <NavLink className="navbar-item" to="/feed">
          News
        </NavLink>
        <NavLink className="navbar-item" to="/people">
          People
        </NavLink>
        <a className="navbar-item">Food</a>
        <a className="navbar-item">Admin</a>
        <a className="navbar-item">More</a>
        <SearchBar />
      </div>
      <div className="navbar-end" />
    </div>
  </nav>
)

export default NavBar
