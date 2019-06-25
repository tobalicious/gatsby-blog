import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Container from "@material-ui/core/Container"

const Blog = () => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <div>Title</div>
        <Link to="/blog/articles/">Articles</Link>
        <Link to="/blog/notes/">Notes</Link>
        <Link to="/blog/questions/">Questions</Link>
      </Container>
    </Layout>
  )
}

export default Blog
