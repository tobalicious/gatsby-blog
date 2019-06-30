import React from "react"
import { graphql } from "gatsby"
import BlogWrapper from "../../components/blog-wrapper"
import BlogLink from "../../components/blog-link"

const Notes = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(edge => edge.node.frontmatter.path.includes("notes"))
    .map(edge => <BlogLink key={edge.node.id} post={edge.node} />)

  return <BlogWrapper active="notes">{posts}</BlogWrapper>
}

export default Notes

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
