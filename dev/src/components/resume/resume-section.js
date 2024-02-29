import React from "react"
import PropTypes from "prop-types"
import CategoryTitle from "components/resume/category-title"

const ResumeSection = ({
  title,
  companyName,
  companyDescription,
  link,
  className,
  time,
  city,
  work,
}) => (
  <section className={`resume-section ${className}`}>
    {title && (
      <CategoryTitle title={title} headingTag="h3" className="heading-title" />
    )}
    <div className="resume-section__info">
      {companyName && link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-section__link"
        >
          <span className="resume-section__secondary-title">{companyName}</span>
        </a>
      ) : (
        <span className="resume-section__secondary-title resume-section__link">
          {companyName}
        </span>
      )}{" "}
      - {city}
    </div>
    {time && <time className="resume-section__time">{time}</time>}

    {companyDescription && (
      <p className="resume-section__about">{companyDescription}</p>
    )}
    {work.length > 0 && (
      <ul className="resume-section__work-list">
        {work.map((workItem, index) => (
          <li key={index}>{workItem}</li>
        ))}
      </ul>
    )}
  </section>
)

ResumeSection.propTypes = {
  title: PropTypes.string,
  companyName: PropTypes.string,
  companyDescription: PropTypes.string,
  link: PropTypes.string,
  time: PropTypes.string,
  city: PropTypes.string,
  className: PropTypes.string,
  work: PropTypes.arrayOf(PropTypes.string),
}

ResumeSection.defaultProps = {
  className: "",
  tech: "",
  work: [],
}

export default ResumeSection
