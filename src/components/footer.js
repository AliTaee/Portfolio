import React from "react"
import Emoji from "../components/emoji"

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()} | ساخته شده با{" "}
    <Emoji emoji="❤️" label="love" />، <Emoji emoji="☕" label="coffee" /> و
    {` `}
    <a
      className="footer__gatsbyjs"
      href="https://www.gatsbyjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gatsby
    </a>
  </footer>
)

export default Footer
