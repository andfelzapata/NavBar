import React from "react"

const SearchBar = () => (
  <div className="control has-icons-left has-icons-right">
    <input className="input" type="email" placeholder="Email" />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope" />
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check" />
    </span>
  </div>
)
