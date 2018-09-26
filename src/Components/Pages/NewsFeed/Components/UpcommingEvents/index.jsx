import React, { PureComponent } from "react"
import { strong } from "prop-types"
import { connect } from "react-redux"

class UpcomingEvents extends PureComponent {
  render() {
    const { events } = this.prop
    const hasEvents = events
    return <div className="UpcomingEvents">{even}</div>
  }
}

UpcomingEvents.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingEvents)
