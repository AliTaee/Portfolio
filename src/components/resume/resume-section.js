import React from "react"
import PropTypes from "prop-types"
import CategoryTitle from "./category-title"

const ResumeSection = ({
  title,
  companyName,
  companyDescription,
  link,
  className,
  time,
  city,
  work,
  tech,
}) => (
  <li className={`resume-section ${className}`}>
    {title && (
      <CategoryTitle title={title} headingTag="h3" className="heading-title" />
    )}
    <div className="resume-section__company-name-city">
      {companyName && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-section__link"
        >
          <span className="resume-section__secondary-title">{companyName}</span>
        </a>
      )}{" "}
      - {city}
    </div>
    {time && <time className="resume-section__time">{time}</time>}
    <div className="resume-section__content">
      {companyDescription && (
        <p className="resume-section__company-about">{companyDescription}</p>
      )}
      <CategoryTitle
        title="Responsibilities and Achievements"
        headingTag="h4"
        className="heading-title resume-section__list-header"
      />
      {work.length > 0 && (
        <ul>
          {work.map((workItem, index) => (
            <li key={index}>{workItem}</li>
          ))}
        </ul>
      )}
      <CategoryTitle
        title="Tools and Technologies"
        headingTag="h4"
        className="heading-title resume-section__list-header"
      />
      {tech.length > 0 && (
        <ul>
          {tech.map((techItem, index) => (
            <li key={index}>{techItem}</li>
          ))}
        </ul>
      )}
    </div>
  </li>
)

ResumeSection.propTypes = {
  title: PropTypes.string,
  companyName: PropTypes.string,
  companyDescription: PropTypes.string,
  link: PropTypes.string,
  time: PropTypes.string,
  city: PropTypes.string,
  className: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  work: PropTypes.arrayOf(PropTypes.string),
}

ResumeSection.defaultProps = {
  className: "",
  tech: [],
  work: [],
}

export default ResumeSection
