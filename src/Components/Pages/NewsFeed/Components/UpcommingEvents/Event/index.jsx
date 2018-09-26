import React from "react"
import { shape, string } from "prop-types"
import { isSameWeek, format } from "date-fns"
import "./Event.scss"

const Event = ({ event: { name, date, location } }) => {
  return (
    <div className="Event">
      <p className="Event__Name title is-size-6">{name}</p>
      <p className="subtitle is-size-7">
        <span className="Event__Date">{date}</span>
        {", "}
        <span className="Event__Location">{location}</span>
      </p>
    </div>
  )
}

Event.propTypes = {
  event: shape({
    name: string,
    date: string,
    location: string
  })
}

export default Event
