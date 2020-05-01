import React from "react"

import Layout from "../components/layout"
import Emoji from "../components/emoji"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="درباره من" />
    <h1>درباره من</h1>
    <p>
      من توسعه دهنده فرانت اند هستم. به موضوعات جاوا اسکریپت و فرانت اند علاقه
      دارم و این پورتفولیو انعکاسی از لذت یادگیری و اشتراک دانش با شماست.
    </p>

    <h2>علی:</h2>
    <ul>
      <li>
        <Emoji emoji="💻" label="pc" />
        توسعه دهنده تمام وقت فرانت اند دولوپر.
      </li>
      <li>
        <Emoji emoji="🐛" label="worm" /> علاقه مند به رمان و موضوعات توسعه
        فردی.
      </li>
      <li>
        <Emoji emoji="📷" label="camera" /> عکاس سورئال! از خلق صحنه های سورئال
        لذت می برم.
      </li>
      <li>
        <Emoji emoji="🎧" label="podcast" /> پادکست: آلبوم، چنل بی، بی پلاس، هلی
        تاک.
      </li>
      <li>
        <Emoji emoji="🌱" label="plant" /> معمولا میز کارم و خانه پر از گل گیاه.
      </li>
      <li>
        <Emoji emoji="🍳" label="cook" /> فرانت اند دولوپری که آشپزی میکنه. ته
        دیگ با فلکس باکس!
      </li>
      <li>
        <Emoji emoji="📖" label="book" /> از یادگیری و آموزش لذت می برم.
      </li>
      <li>
        <Emoji emoji="✍🏻" label="Writing Hand" /> علاقه مند به نوشتن مقاله و
        آموزش در حوزه فرانت اند.
      </li>
    </ul>
  </Layout>
)

export default AboutPage
