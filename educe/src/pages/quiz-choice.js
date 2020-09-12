import React from "react"
// import { Link } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuizChoice from "../components/QuizChoice"

const QuizChoicePage = () => (
    <Layout>
        <SEO title="Home" />
        <QuizChoice />
    </Layout>
)

export default QuizChoicePage