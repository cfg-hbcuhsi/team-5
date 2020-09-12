import React from "react"
// import { Link } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUp from "../components/SignUp"

const SignUpPage = () => (
    <Layout>
        <SEO title="Home" />
        <SignUp />
    </Layout>
)

export default SignUpPage