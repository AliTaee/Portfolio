import React from "react"

import SEO from "../components/seo"
import Emoji from "../components/common/emoji"
import Layout from "../components/layout/layout"

const NotFoundPage = () => (
  <Layout classStyle="page-404">
    <SEO title="404 Not found" />
    <h1>
      Not found! <Emoji emoji="😔" label="sad" />
    </h1>
    <p>Look like you are lost or I can't find what you wanted.</p>
  </Layout>
)

export default NotFoundPage
