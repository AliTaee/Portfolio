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
        <p className="intro__about-me">
          I am a Front-end and WordPress developer who started learning web
          programming back in 2016. Reading the Web sites practicing and
          learning through the implementation of the projects and new challenges
          also my daily habits. My career passion is JavaScript, React and User
          interface and my interests are reading books, music, and photography.
          The strengths of my work are learning, ideas, user experience (UX),
          and user interface (UI).
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
