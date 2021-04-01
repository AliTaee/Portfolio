import React from "react"

// Resume component
import SEO from "../components/seo"
import Image from "../components/common/image"
import Badge from "../components/resume/badge"
import Layout from "../components/layout/layout"
import CategoryTitle from "../components/resume/category-title"

// Resume source
import { skills } from "../resume-source"

const Resume = () => (
  <Layout classStyle="flex row-reverse">
    <SEO title="Resume" />
    <article className="resume__main">
      <CategoryTitle title="work experience" />
      <CategoryTitle title="projects" />
      <CategoryTitle title="certificates" />
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
