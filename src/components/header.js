import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__cont">
      <span className="header__title">
        <Link className="header__link" to="/">
          {siteTitle}
        </Link>
      </span>
      <nav className="main-nav">
        <ul>
          <li className="main-nav__item">
            <Link className="header__link" to="/">
              Home
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="header__link" to="/resume/">
              Resume
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="header__link" to="/blog/">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
