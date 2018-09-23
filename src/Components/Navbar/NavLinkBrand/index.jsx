import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "img/pinterest-logo.png"
import "./NavLinkBrand.scss"

const NavLInkBrand = () => (
  <NavLink className="NavLInkBrand navbar-item" to="/">
    <img src={Logo} />
    <span className="BrandName is-size-5">Pintrest</span>
  </NavLink>
)

export default NavLInkBrand
