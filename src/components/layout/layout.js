/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../../styles/index.scss"

import "typeface-inter"

const Layout = ({ children, classStyle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main className={`main ${classStyle ? classStyle : ""}`}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

Layout.defaultPropTypes = {
  classStyle: "",
}

Layout.propTypes = {
  classStyle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
