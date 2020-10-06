import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <h1>Not found!</h1>
    <p>Look like you are lost or I can't find what you wanted.</p>
  </Layout>
)

export default NotFoundPage
