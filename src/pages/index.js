import React from "react"

import { developerInfo } from "../resume-source"

import Layout from "../components/layout/layout"
import Image from "../components/common/image"
import Emoji from "../components/common/emoji"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout classStyle="flex-center">
    <SEO title="Home" />
    <div className="intro">
      <section className="intro__welcome">
        <h1 className="intro__title">
          Hello World, I'm{" "}
          <span className="text-capitalize">{developerInfo.name}</span>
          <span className="hand-wave">
            <Emoji emoji="👋" label="Hand waving" />
          </span>
        </h1>
        <p>{developerInfo.about}</p>
      </section>
      <section className="card intro__card card--small">
        <Image className="img-round" />
        <h2 className="card__title">{developerInfo.name}</h2>
        <p className="card__desc">{developerInfo.title}</p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
