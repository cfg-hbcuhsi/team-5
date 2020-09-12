import React from "react"
import { Link } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import RightSidebar from "../components/RightSidebar"
import LeftSidebar from "../components/LeftSidebar"
import CardExampleGroups from "../components/Card"
import Profile from "../components/Profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile />
    <RightSidebar />
    <LeftSidebar />
    <CardExampleGroups />
<<<<<<< HEAD

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
=======
>>>>>>> 0c5fe5f6590d56bf9d7bd4734781299bef1251c0
    <Link to="/login">Log In</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
    <br />
    <Link to="/quiz-choice">Quiz Choice</Link>
  </Layout>
)

export default IndexPage
