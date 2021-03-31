import React from "react"
import PropTypes from "prop-types"

const CategoryTitle = ({ title }) => (
  <h2 className="resume__category">{title}</h2>
)

CategoryTitle.propTypes = {
  title: PropTypes.string,
}

CategoryTitle.defaultProps = {
  title: ``,
}

export default CategoryTitle
