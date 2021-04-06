import React from "react"
import PropTypes from "prop-types"

const ResumeSection = ({
  time,
  list,
  mainTitle,
  className,
  secondaryTitle,
}) => (
  <li className={`resume-section ${className}`}>
    {mainTitle && <h3 className="heading-title">{mainTitle}</h3>}
    {secondaryTitle && (
      <span className="resume-section__secondary-title">{secondaryTitle}</span>
    )}
    {time && <time className="resume-section__time">{time}</time>}
    {list.length > 0 && (
      <ul>
        {list.map(listItem => (
          <li key={listItem.id}>{listItem.detail}</li>
        ))}
      </ul>
    )}
  </li>
)

ResumeSection.propTypes = {
  time: PropTypes.string,
  className: PropTypes.string,
  mainTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape()),
}

ResumeSection.defaultProps = {
  list: [],
  time: "",
  className: "",
  mainTitle: "",
  secondaryTitle: "",
}

export default ResumeSection
