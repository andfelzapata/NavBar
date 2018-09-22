import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "img/pinterest-logo.png"

const NavBar = () => (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <NavLink className="navbar-item" to="/">
        <img src={Logo} />
      </NavLink>
      <div className="navbar-burger burger">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div className="navbar-menu is-flex">
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
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a
                className="bd-tw-button button"
                data-social-network="Twitter"
                data-social-action="tweet"
                data-social-target="http://localhost:4000"
                target="_blank"
                href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
              >
                <span className="icon">
                  <i className="fab fa-twitter" />
                </span>
                <span>Tweet</span>
              </a>
            </p>
            <p className="control">
              <a
                className="button is-primary"
                href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip"
              >
                <span className="icon">
                  <i className="fas fa-download" />
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
