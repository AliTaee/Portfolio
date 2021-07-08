import React, { Fragment, memo } from "react"

// Common component
import SEO from "../components/seo"
import Image from "../components/common/image"
import Layout from "../components/layout/layout"

// Resume component
import Badge from "../components/resume/badge"
import ResumeSection from "../components/resume/resume-section"
import CategoryTitle from "../components/resume/category-title"

// Resume source
import {
  skill,
  contacts,
  developerInfo,
  workExperience,
} from "../resume-source"

import AliTaeeResumePDF from "../assets/ResumeV1.0.0.pdf"

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

const Sidebar = () => (
  <aside className="resume__sidebar">
    <ResumeHeader />

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

    {skill.map((categorySkill, index) => (
      <Fragment key={index}>
        <CategoryTitle
          title={categorySkill.label}
          className="resume__margin-top-lg resume__category"
        />
        <article className="resume__skills">
          {categorySkill.skills.map(skill => (
            <Badge key={skill.id} title={skill.title} />
          ))}
        </article>
      </Fragment>
    ))}
  </aside>
)

const Main = () => (
  <article className="resume__main">
    <CategoryTitle title="EXPERIENCES" />
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
  </article>
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
