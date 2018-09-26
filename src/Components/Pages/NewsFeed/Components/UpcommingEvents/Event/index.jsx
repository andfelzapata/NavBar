import React from "react"
import { shape, string } from "prop-types"

const Event = ({ event: { name, date, location } }) => {
  return <div className="Event" />
}

Event.propTypes = {
  event: shape({
    event: string
  })
}

export default Event
