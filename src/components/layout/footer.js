import React, { memo } from "react"
import ScrollBackToTop from "../scrollBackToTop"

const Footer = () => (
  <footer className="footer">
    <ScrollBackToTop />
    <div className="container">
      Design and Develop by Ali Taee with
      <a
        className="footer__gatsbyjs"
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </div>
  </footer>
)

export default memo(Footer)
