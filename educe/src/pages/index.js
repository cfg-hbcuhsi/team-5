import React from "react"
import { Link } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import RightSidebar from "../components/RightSidebar"
import LeftSidebar from "../components/LeftSidebar"
import CardExampleGroups from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <RightSidebar />
    <LeftSidebar />
    <CardExampleGroups />
    <Link to="/login">Log In</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
    <br />
    <Link to="/quiz-choice">Quiz Choice</Link>
  </Layout>
)

export default IndexPage
