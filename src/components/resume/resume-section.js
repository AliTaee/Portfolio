import React from "react"
import PropTypes from "prop-types"

const ResumeSection = ({ mainTitle, secondaryTitle, time, list }) => (
  <li className="resume-section">
    {mainTitle && <h3 className="heading-title">{mainTitle}</h3>}
    {secondaryTitle && (
      <span className="resume-section__secondary-title">{secondaryTitle}</span>
    )}
    {time && <time className="resume-section__time">{time}</time>}
    {list.length && (
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
  mainTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape()),
}

ResumeSection.defaultProps = {
  list: [],
  time: "",
  mainTitle: "",
  secondaryTitle: "",
}

export default ResumeSection
