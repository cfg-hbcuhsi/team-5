import React from "react"
import { Link } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import RightSidebar from "../components/RightSidebar"
import LeftSidebar from "../components/LeftSidebar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <RightSidebar />
    <LeftSidebar />
    <Link to="/login">Log In</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
  </Layout>
)

export default IndexPage
