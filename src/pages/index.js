import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Emoji from "../components/emoji"
import SEO from "../components/seo"

import "typeface-inter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro">
      <section className="intro__welcome">
        <h1>
          Hello World, I'm Ali Taee <Emoji emoji="👋" label="Hand waving" />
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
