import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "img/pinterest-logo.png"

const NavLInkBrand = () => (
  <NavLink className="navbar-item" to="/">
    <img src={Logo} />
  </NavLink>
)

export default NavLInkBrand
