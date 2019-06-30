import React from "react"
import { graphql } from "gatsby"
import BlogWrapper from "../components/blog-wrapper"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: "1em",
    paddingRight: "1em",
    marginTop: "2em",
  },
  title: {
    fontSize: "2em",
    fontWeight: "bold",
  },
  date: {
    fontSize: "1em",
    opacity: "0.5",
  },
  content: {
    fontSize: "1em",
  },
}))
//https://tylerobriant.us3.list-manage.com/subscribe/post?u=16ac3be731b7b819cf76566b1&amp;id=a0b7cdb7d5
export default function Template({ data }) {
  const classes = useStyles()
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <BlogWrapper active="articles">
      <div className={classes.container}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </BlogWrapper>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
