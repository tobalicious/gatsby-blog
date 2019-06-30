import React from "react"
import { navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  title: {
    color: "#000",
    textDecoration: "none",
    fontSize: "1.125em",
    fontWeight: "bold",
  },
  subtitle: {
    opacity: "0.5",
    fontSize: "0.75em",
    marginTop: "-0.25em",
  },
  link: {
    color: "#000",
    textDecoration: "none",
    cursor: "pointer",
    marginTop: "1.5em",
    paddingLeft: "1em",
  },
}))
const BlogLink = ({ post }) => {
  const classes = useStyles()

  return (
    <div
      onClick={e => navigate(post.frontmatter.path)}
      className={classes.link}
    >
      <div className={classes.title}>{post.frontmatter.title}</div>
      <div className={classes.subtitle}>
        | <i>{post.frontmatter.date}</i>
      </div>
    </div>
  )
}

export default BlogLink
