import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header 
    sx={{
      color: "text",
      backgroundColor: "background"
    }}
  >
      <h1>
        <Link to="/"
         sx={{
           color: "text"
         }}
        >{siteTitle}</Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
