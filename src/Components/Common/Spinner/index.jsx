import React from "react"
import { bool, string } from "prop-types"
import "./Spinner.scss"

const Spinner = ({ isLoading, width, height }) => (
  <div
    className="sk-fading-circle"
    style={{ width, height, display: isLoading ? "block" : "none" }}
  >
    <div className="sk-circle1 sk-circle" />
    <div className="sk-circle2 sk-circle" />
    <div className="sk-circle3 sk-circle" />
    <div className="sk-circle4 sk-circle" />
    <div className="sk-circle5 sk-circle" />
    <div className="sk-circle6 sk-circle" />
    <div className="sk-circle7 sk-circle" />
    <div className="sk-circle8 sk-circle" />
    <div className="sk-circle9 sk-circle" />
    <div className="sk-circle10 sk-circle" />
    <div className="sk-circle11 sk-circle" />
    <div className="sk-circle12 sk-circle" />
  </div>
)

Spinner.propTypes = {
  width: string,
  height: string,
  isLoading: bool.isRequired
}

Spinner.defaultProps = {
  width: "50px",
  height: "50px"
}

export default Spinner
