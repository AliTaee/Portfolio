import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Emoji from "../components/emoji"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="خانه" />
    <div className="intro">
      <section className="intro__welc">
        <h1>
          سلام دنیا! من علی طائی هستم. <Emoji emoji="👋" label="Hand waving" />
        </h1>
        <p>
          من توسعه دهنده فرانت اند هستم و به موضوعات جاوا اسکریپت و برنامه نویسی
          علاقه دارم. این سایت انعکاس لذت یادگیری و اشتراک دانش با شماست.
        </p>
      </section>
      <section className="card intro__card card--small">
        <Image className="img-round" />
        <h2 className="card__title">Ali Taee</h2>
        <p className="card__desc">
          توسعه دهنده فرانت اند و وردپرس، علاقه مند به عکاسی، کتاب، پادکست،
          سورئال، سفر
        </p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
