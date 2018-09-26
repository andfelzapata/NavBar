import React, { PureComponent } from "react"
import { arrayOf, shape, string, number } from "prop-types"
import { connect } from "react-redux"
import { doesArrayHaveData } from "utils/hasData"
import { eventsSelector } from "../../reducers/upcomingEvents"
import getUpcomingEvents from "../../actions/upcommingEvents"
import Event from "./Event"
import "./UpcomingEvents.scss"

class UpcomingEvents extends PureComponent {
  componentDidMount() {
    const { getUpcomingEvents } = this.props
    getUpcomingEvents()
  }
  render() {
    const { events } = this.props
    return (
      <div className="UpcomingEvents">
        <span className="is-size-7">UPCOMING EVENTS</span>
        {doesArrayHaveData(events) &&
          events.map(event => <Event key={event.id} event={event} />)}
      </div>
    )
  }
}

UpcomingEvents.propTypes = {
  events: arrayOf(
    shape({
      id: number,
      name: string,
      date: string,
      location: string
    })
  ).isRequired
}

const mapStateToProps = state => ({
  events: eventsSelector(state)
})

const mapDispatchToProps = {
  getUpcomingEvents
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingEvents)
