import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const routes = [
  { id: 0, label: "Home", href: "/" },
  { id: 1, label: "Resume", href: "/resume/" },
]

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <span className="header__title">
        <Link className="header__link" to="/">
          {siteTitle}
        </Link>
      </span>
      <nav className="main-nav">
        <ul>
          {routes.map(route => (
            <li key={route.id} className="main-nav__item">
              <Link
                activeClassName="header__link--active"
                className="header__link"
                to={route.href}
              >
                {route.label}
              </Link>
            </li>
          ))}
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
