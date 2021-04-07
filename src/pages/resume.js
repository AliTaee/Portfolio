import React from "react"

// Resume component
import SEO from "../components/seo"
import Image from "../components/common/image"
import Badge from "../components/resume/badge"
import Layout from "../components/layout/layout"

import ResumeSection from "../components/resume/resume-section"
import CategoryTitle from "../components/resume/category-title"

// Resume source
import {
  skills,
  projects,
  contacts,
  certificates,
  workExperience,
} from "../resume-source"

const Resume = () => (
  <Layout classStyle="resume">
    <SEO title="Resume" />
    <article className="resume__main">
      <CategoryTitle title="work experience" />
      <ol className="unbulleted-list">
        {workExperience.map(experience => (
          <ResumeSection
            key={experience.id}
            list={experience.list}
            time={experience.time}
            mainTitle={experience.mainTitle}
            secondaryTitle={experience.secondaryTitle}
          />
        ))}
      </ol>

      <CategoryTitle title="projects" />
      <ol className="unbulleted-list">
        {projects.map(project => (
          <ResumeSection
            key={project.id}
            list={project.list}
            time={project.time}
            mainTitle={project.mainTitle}
            secondaryTitle={project.secondaryTitle}
          />
        ))}
      </ol>

      <CategoryTitle title="certificates" />
      <ol className="unbulleted-list">
        {certificates.map(certificate => (
          <ResumeSection
            key={certificate.id}
            list={certificate.list}
            time={certificate.time}
            mainTitle={certificate.mainTitle}
            secondaryTitle={certificate.secondaryTitle}
          />
        ))}
      </ol>
    </article>

    <aside className="resume__sidebar">
      <Image className="img-round resume__img" />
      <p>
        I am a Front-end and WordPress developer who started learning Web
        programming back in 2016. Reading the Web sites practicing and learning
        through the implementation of the projects and new challenges also my
        daily habits. My career passion is JavaScript, React and user interface
        and my interests are reading book, music and photography. The strengths
        of my work are learning, ideas, user experience (UX) and user interface
        (UI).
      </p>

      <CategoryTitle title="contacts" />
      <ul className="unbulleted-list resume__contact">
        {contacts.map(contact => (
          <li key={contact.id}>
            <a href={contact.href} target="_blank" rel="noopener noreferrer">
              <span className={contact.icon}></span> {contact.text}
            </a>
          </li>
        ))}
      </ul>

      <CategoryTitle title="skills" className="resume__margin-top-lg" />
      <article className="resume__skills">
        {skills.map(skill => (
          <Badge key={skill.id} title={skill.title} />
        ))}
      </article>
      <a
        href="https://www.codewars.com/users/AliTaee"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="resume__margin-top-lg"
          src="https://camo.githubusercontent.com/eb8b521f96683fe87aab7b8c510b135037b0687cc0d20a1997a1d81fe373cc12/68747470733a2f2f7777772e636f6465776172732e636f6d2f75736572732f416c69546165652f6261646765732f6c61726765"
          alt="my profile at codewars"
          data-canonical-src="https://www.codewars.com/users/AliTaee/badges/large"
          style={{ maxWidth: "100%" }}
        />
      </a>
    </aside>
  </Layout>
)

export default Resume
