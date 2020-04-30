import React from "react"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, ساخته شده با
    {` `}
    <a
      href="https://www.gatsbyjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gatsby
    </a>
  </footer>
)

export default Footer
