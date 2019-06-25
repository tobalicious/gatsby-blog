import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BlogWrapper from "../../components/blog-wrapper"
import BlogLink from "../../components/blog-link"

import Container from "@material-ui/core/Container"
import BlogSelectors from "../../components/blog-selectors"
const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => edge.node.frontmatter.path.includes("articles")) // You can filter your posts based on some criteria
    .map(edge => <BlogLink key={edge.node.id} post={edge.node} />)

  return <BlogWrapper active="articles">{Posts}</BlogWrapper>
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
