import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import NightTheme from "../night-theme"
import { routes } from "../../routes"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <div className="flex justify-center">
        <span className="header__title">
          <Link className="header__link" to="/">
            {siteTitle}
          </Link>
        </span>
        <NightTheme />
      </div>
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
