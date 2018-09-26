import React, { PureComponent } from "react"
import { arrayOf, shape, string } from "prop-types"
import { connect } from "react-redux"
import { eventsSelector } from "../../reducers/upcomingEvents"
import getUpcomingEvents from "../../actions/upcommingEvents"
import { doesArrayHaveData } from "utils/hasData"

class UpcomingEvents extends PureComponent {
  componentDidMount() {
    const { getUpcomingEvents } = this.props
    getUpcomingEvents()
  }
  render() {
    const { events } = this.props
    return (
      <div className="UpcomingEvents">
        {doesArrayHaveData(events) &&
          events.map(e => <div key={e.id}>{e.event}</div>)}
      </div>
    )
  }
}

UpcomingEvents.propTypes = {}

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
