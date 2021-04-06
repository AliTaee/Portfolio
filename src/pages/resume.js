import React from "react"

// Resume component
import SEO from "../components/seo"
import Image from "../components/common/image"
import Badge from "../components/resume/badge"
import Layout from "../components/layout/layout"

import ResumeSection from "../components/resume/resume-section"
import CategoryTitle from "../components/resume/category-title"

// Resume source
import { skills, certificates, workExperience } from "../resume-source"

const Resume = () => (
  <Layout classStyle="flex row-reverse">
    <SEO title="Resume" />
    <article className="resume__main">
      <CategoryTitle title="work experience" />
      <ul className="unbulleted-list">
        {workExperience.map(experience => (
          <ResumeSection
            key={experience.id}
            list={experience.list}
            time={experience.time}
            mainTitle={experience.mainTitle}
            secondaryTitle={experience.secondaryTitle}
          />
        ))}
      </ul>
      <CategoryTitle title="projects" />

      <CategoryTitle title="certificates" />
      <ul className="unbulleted-list">
        {certificates.map(certificate => (
          <ResumeSection
            key={certificate.id}
            list={certificate.list}
            time={certificate.time}
            mainTitle={certificate.mainTitle}
            secondaryTitle={certificate.secondaryTitle}
          />
        ))}
      </ul>
    </article>
    <aside className="resume__sidebar">
      <Image className="img-round resume__img" />
      <p className="resume__about">
        I am a Front-end and WordPress developer who started learning Web
        programming back in 2016. Reading the Web sites practicing and learning
        through the implementation of the projects and new challenges also my
        daily habits. My career passion is JavaScript, React and user interface
        and my interests are reading book, music and photography. The strengths
        of my work are learning, ideas, user experience (UX) and user interface
        (UI).
      </p>
      <img
        src="https://camo.githubusercontent.com/eb8b521f96683fe87aab7b8c510b135037b0687cc0d20a1997a1d81fe373cc12/68747470733a2f2f7777772e636f6465776172732e636f6d2f75736572732f416c69546165652f6261646765732f6c61726765"
        alt="my profile at codewars"
        data-canonical-src="https://www.codewars.com/users/AliTaee/badges/large"
        style={{ maxWidth: "100%" }}
      ></img>
      <CategoryTitle title="skills" />
      <article className="resume__skills">
        {skills.map(skill => (
          <Badge key={skill.id} title={skill.title} />
        ))}
      </article>
    </aside>
  </Layout>
)

export default Resume
