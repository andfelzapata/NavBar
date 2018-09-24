import React from "react"
import { string } from "prop-types"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { currentThemeSelector } from "selectors"
import Pinterest from "img/pinterest-logo.png"
import Square from "img/square-logo.png"
import "./NavLinkBrand.scss"

const NavLInkBrand = ({ theme }) => (
  <NavLink className="NavLInkBrand navbar-item" to="/">
    {theme === "Pinterest" ? (
      <img src={Pinterest} alt={theme} />
    ) : (
      <img src={Square} alt={theme} />
    )}
    <span className="BrandName is-size-5">{theme}</span>
  </NavLink>
)

const mapStateToProps = state => ({
  theme: currentThemeSelector(state)
})

NavLInkBrand.propTypes = {
  theme: string.isRequired
}

export default connect(mapStateToProps)(NavLInkBrand)
