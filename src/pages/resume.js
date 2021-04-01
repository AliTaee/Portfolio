import React from "react"

// Resume component
import SEO from "../components/seo"
import Image from "../components/common/image"
import Badge from "../components/resume/badge"
import Layout from "../components/layout/layout"
import CategoryTitle from "../components/resume/category-title"

const skills = [
  { id: 9, title: "Agile Development" },
  { id: 6, title: "Scrum" },
  { id: 8, title: "Trello" },
  { id: 11, title: "Communication" },
  { id: 10, title: "Team Work" },
  { id: 7, title: "Jira" },
  { id: 13, title: "CSS Processors" },
  { id: 12, title: "SPA" },
  { id: 5, title: "JavaScript" },
  { id: 1, title: "jQuery" },
  { id: 0, title: "React" },
  { id: 2, title: "CSS" },
  { id: 4, title: "HTML" },
  { id: 15, title: "Redux" },
  { id: 20, title: "E2E" },
  { id: 16, title: "TypeScript" },
  { id: 14, title: "Responsive Web Design" },
  { id: 17, title: "WordPress Development" },
  { id: 18, title: "WP Theme Development" },
  { id: 19, title: "WP Plugin Development" },
]

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
