import React, { PureComponent } from "react"
import classNames from "classnames"
import { func, string } from "prop-types"
import { connect } from "react-redux"
import themeSelector from "selectors/themeSelector"
import switchTheme from "./actions"
import "./ThemeSwitcher.scss"

export class ThemeSwitcher extends PureComponent {
  toggleTheme(ev) {
    const { switchTheme } = this.props
    const { target } = ev
    const themeName = target.checked ? "Pinterest" : "Square"
    switchTheme(themeName)
  }

  render() {
    const { theme } = this.props
    return (
      <div className={classNames("ThemeSwitcher field", `${theme}`)}>
        <input
          id="themeSwitcherButton"
          type="checkbox"
          className="switch is-rounded"
          onChange={ev => this.toggleTheme(ev)}
          checked={theme === "Pinterest" ? true : false}
        />
        <label htmlFor="themeSwitcherButton" />
      </div>
    )
  }
}

ThemeSwitcher.propTypes = {
  theme: string.isRequired,
  switchTheme: func.isRequired
}

const mapStateToProps = state => ({
  theme: themeSelector(state)
})

const mapDispatchToProps = {
  switchTheme
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSwitcher)
