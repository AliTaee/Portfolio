import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import CategoryTitle from "../components/resume/category-title"

const Resume = () => (
  <Layout classStyle="flex row-reverse">
    <SEO title="Resume" />
    <article className="resume__main">
      <CategoryTitle title="work experience" />
      <CategoryTitle title="projects" />
      <CategoryTitle title="certificates" />
    </article>
    <aside className="resume__sidebar">
      <CategoryTitle title="skills" />
    </aside>
  </Layout>
)

export default Resume
