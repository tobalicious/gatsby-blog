import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"

import Container from "@material-ui/core/Container"
import Divider from "@material-ui/core/Divider"
import BlogSelectors from "./blog-selectors"

const BlogWrapper = props => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <div>Marginalia</div>
        <BlogSelectors active={props.active} />
        <Divider />
        {props.children}
      </Container>
    </Layout>
  )
}

export default BlogWrapper
