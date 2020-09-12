import React from "react"
import { Link } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Incentives from "../components/Incentives"

const IncentivesPage = () => (
  <Layout>
    <SEO title="Home" />
    <Incentives />
  </Layout>
)

export default IncentivesPage