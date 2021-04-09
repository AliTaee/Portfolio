import React from "react"

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
          Hello World, I'm Ali Taee{" "}
          <span className="hand-wave">
            <Emoji emoji="👋" label="Hand waving" />
          </span>
        </h1>
        <p>
          I am a Front-end developer with 4 years of experience. I enjoy every
          aspect of the job from the implement user interface to advanced
          JavaScript topics. I have a passion to work on side projects to learn
          more and create new things. My interests are reading novels, music,
          and photography.
        </p>
      </section>
      <section className="card intro__card card--small">
        <Image className="img-round" />
        <h2 className="card__title">Ali Taee</h2>
        <p className="card__desc">Front-end developer</p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
