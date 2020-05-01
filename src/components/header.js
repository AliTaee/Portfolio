import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
              خانه
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="header__link" to="/about/">
              درباره
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="header__link" to="/blog/">
              بلاگ
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
