import React from "react"
import PropTypes from "prop-types"
import CategoryTitle from "./category-title"

const Education = ({ fieldOfStudy, degree, school, time }) => (
  <div className="resume-section">
    {school && (
      <CategoryTitle title={school} headingTag="h3" className="heading-title" />
    )}
    <div className="resume-section__company-name-city">
      {degree && (
        <span className="resume-section__secondary-title">{degree}</span>
      )}{" "}
      - {fieldOfStudy}
    </div>
    {time && <time className="resume-section__time">{time}</time>}
  </div>
)

Education.propTypes = {
  school: PropTypes.string,
  fieldOfStudy: PropTypes.string,
  degree: PropTypes.string,
  time: PropTypes.string,
  city: PropTypes.string,
}

export default Education
