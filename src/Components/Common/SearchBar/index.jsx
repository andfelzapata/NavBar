import React from "react"
import "./SearchBar.scss"

const SearchBar = () => (
  <div className="SearchBar control has-icons-left navbar-item">
    <input
      className="input is-size-7"
      type="text"
      placeholder="Find a Pintrest"
    />
    <span className="icon is-small is-left">
      <i className="fa fa fa-search" />
    </span>
  </div>
)

export default SearchBar
