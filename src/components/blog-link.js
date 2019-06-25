import React from "react"
import { Link } from "gatsby"
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
    margin: "0.5em",
    cursor: "pointer",
  },
}))
const BlogLink = ({ post }) => {
  const classes = useStyles()

  return (
    <Link className={classes.link} to={post.frontmatter.path}>
      <div className={classes.title}>{post.frontmatter.title}</div>
      <div className={classes.subtitle}>
        | <i>{post.frontmatter.date}</i>
      </div>
    </Link>
  )
}

export default BlogLink
