import React from "react"
import { Link } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import RightSidebar from "../components/RightSidebar"
import LeftSidebar from "../components/LeftSidebar"
import Login from "../components/Login"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <RightSidebar />
    <LeftSidebar />
    <Login />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
