import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

/** @jsx jsx */
import { jsx } from "theme-ui"

const SecondPage = () => (
  <div sx={{
    backgroundColor: "background",
    color: "text",
  }}>
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/"
    sx={{
      color: 'primary'
    }}
    >Go back to the homepage</Link>
  </Layout>
  </div>
)

export default SecondPage
