import React from "react"
import PropTypes from "prop-types"

const Badge = ({ title }) => <span className="resume__badge">{title}</span>

Badge.propTypes = {
  title: PropTypes.string,
}

Badge.defaultProps = {
  title: ``,
}

export default Badge
