import React from "react"

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
  // projects,
  contacts,
  certificates,
  workExperience,
} from "../resume-source"

import AliTaeeResumePDF from "../assets/Resume _ Ali Taee.pdf"

const Sidebar = () => (
  <aside className="resume__sidebar">
    <Image className="img-round resume__img" />
    <h1 className="resume__name">
      ali taee <br /> <span className="resume__title">front-end developer</span>
    </h1>
    <p>
      I am a Front-end developer with 4 years of experience. I enjoy every
      aspect of the job from the implement user interface to advanced JavaScript
      topics. I have a passion to work on side projects to learn more and create
      new things. My interests are reading novels, music, and photography.
    </p>

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

    {skill.map(categorySkill => (
      <>
        <CategoryTitle
          title={categorySkill.label}
          className="resume__margin-top-lg"
        />
        <article className="resume__skills">
          {categorySkill.skills.map(skill => (
            <Badge key={skill.id} title={skill.title} />
          ))}
        </article>
      </>
    ))}
  </aside>
)

const Main = () => (
  <article className="resume__main">
    <CategoryTitle title="work experience" />
    <ol className="unbulleted-list">
      {workExperience.map(experience => (
        <ResumeSection
          key={experience.id}
          list={experience.list}
          time={experience.time}
          mainLink={experience.mainLink}
          mainTitle={experience.mainTitle}
          secondaryTitle={experience.secondaryTitle}
        />
      ))}
    </ol>

    {/* <CategoryTitle title="projects" />
    <ol className="unbulleted-list">
      {projects.map(project => (
        <ResumeSection
          key={project.id}
          list={project.list}
          time={project.time}
          mainLink={project.mainLink}
          mainTitle={project.mainTitle}
          secondaryTitle={project.secondaryTitle}
        />
      ))}
    </ol> */}

    <CategoryTitle title="certificates" />
    <ol className="unbulleted-list">
      {certificates.map(certificate => (
        <ResumeSection
          key={certificate.id}
          list={certificate.list}
          time={certificate.time}
          mainLink={certificate.mainLink}
          mainTitle={certificate.mainTitle}
          secondaryTitle={certificate.secondaryTitle}
        />
      ))}
    </ol>
  </article>
)

const DownloadResume = () => {
  return (
    <div className="flex-center">
      <a className="download-resume" href={AliTaeeResumePDF} download>
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

export default Resume
