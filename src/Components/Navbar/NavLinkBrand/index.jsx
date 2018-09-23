import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "img/pinterest-logo.png"
import "./NavLinkBrand.scss"

const NavLInkBrand = () => (
  <NavLink className="NavLInkBrand navbar-item" to="/">
    <img src={Logo} />
    <span className="BrandName">Pintrest</span>
  </NavLink>
)

export default NavLInkBrand
