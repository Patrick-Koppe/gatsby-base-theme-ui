import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

/** @jsx jsx */
import { jsx } from "theme-ui"

const IndexPage = () => (
  <div sx={{
    backgroundColor: "background",
    color: "text",
  }}>

<Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/" 
      sx={{
        color: 'primary'
      }}
    >Go to page 2</Link>
  </Layout>
  </div>
  
)

export default IndexPage
