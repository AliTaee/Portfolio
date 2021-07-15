import React, { Fragment, memo } from "react"

// Common component
import SEO from "../components/seo"
import Image from "../components/common/image"
import Layout from "../components/layout/layout"
import Education from "../components/resume/education"

// Resume component
import Badge from "../components/resume/badge"
import ResumeSection from "../components/resume/resume-section"
import CategoryTitle from "../components/resume/category-title"

// Resume source
import {
  skills,
  contacts,
  languages,
  educations,
  developerInfo,
  workExperience,
} from "../resume-source"

import AliTaeeResumePDF from "../assets/ResumeV1.1.0.pdf"

const ResumeHeader = () => (
  <>
    <Image className="img-round resume__img" />
    <h1 className="resume__name">
      {developerInfo.name} <br />
      <span className="resume__title">{developerInfo.title}</span>
    </h1>
    <p>{developerInfo.about}</p>
  </>
)

const Contacts = () => (
  <>
    <CategoryTitle title="contacts" />
    <ul className="unbulleted-list resume__contact">
      {contacts.map(contact => (
        <li key={contact.id}>
          <a href={contact.href} target="_blank" rel="noopener noreferrer">
            <span className={contact.icon} /> {contact.text}
          </a>
        </li>
      ))}
    </ul>
  </>
)

const Skills = () => (
  <>
    <CategoryTitle
      title="Skills"
      className="resume__margin-top-lg resume__category"
    />
    <section className="resume__skills">
      {skills.map(skill => (
        <Badge key={skill.id} title={skill.title} />
      ))}
    </section>
  </>
)

const Languages = () => (
  <>
    <CategoryTitle
      title="Languages"
      className="resume__margin-top-lg resume__category"
    />
    <section className="resume__skills">
      {languages.map(language => (
        <Badge key={language.id} title={language.name} />
      ))}
    </section>
  </>
)

const Sidebar = () => (
  <aside className="resume__sidebar">
    <ResumeHeader />
    <Contacts />
    <Skills />
    <Languages />
  </aside>
)

const Main = () => (
  <section className="resume__main">
    <CategoryTitle title="experiences" />
    <ol className="unbulleted-list">
      {workExperience.map(experience => (
        <ResumeSection
          key={experience.id}
          time={experience.time}
          link={experience.link}
          city={experience.city}
          work={experience.work}
          tech={experience.tech}
          title={experience.title}
          companyName={experience.companyName}
          companyDescription={experience.companyDescription}
        />
      ))}
    </ol>
    <CategoryTitle title="education" />
    {educations.map(education => (
      <Education
        key={education.id}
        time={education.time}
        school={education.school}
        degree={education.degree}
        fieldOfStudy={education.fieldOfStudy}
      />
    ))}
  </section>
)

const DownloadResume = () => {
  return (
    <div className="flex-center">
      <a
        className="download-resume"
        href={AliTaeeResumePDF}
        download={`Resume_${developerInfo.name}.pdf`}
      >
        Download resume
      </a>
    </div>
  )
}

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <article className="resume">
      <Main />
      <Sidebar />
    </article>
    <DownloadResume />
  </Layout>
)

export default memo(Resume)
