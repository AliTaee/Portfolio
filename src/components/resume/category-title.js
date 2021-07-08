import React from "react"
import PropTypes from "prop-types"

const CategoryTitle = ({ title, className, headingTag }) => {
  const generateHeading = (title, headingTagNumber) => {
    switch (headingTagNumber) {
      case "h1":
        return <h1 className={className}>{title}</h1>

      case "h2":
        return <h2 className={className}>{title}</h2>

      case "h3":
        return <h3 className={className}>{title}</h3>

      case "h4":
        return <h4 className={className}>{title}</h4>

      case "h5":
        return <h5 className={className}>{title}</h5>

      case "h6":
        return <h6 className={className}>{title}</h6>

      default:
        return <h2 className={className}>{title}</h2>
    }
  }

  return generateHeading(title, headingTag)
}

CategoryTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  headingTag: PropTypes.string,
}

CategoryTitle.defaultProps = {
  title: "",
  className: "resume__category",
  headingTag: "h2",
}

export default CategoryTitle
