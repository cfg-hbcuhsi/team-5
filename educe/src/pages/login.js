import React from "react"
// import { Link } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Login from "../components/Login"

const LoginPage = () => (
    <Layout>
        <SEO title="Home" />
        <Login />
    </Layout>
)

export default LoginPage