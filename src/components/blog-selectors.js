import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  gLink: {
    color: "#000",
    textDecoration: "none",
    fontSize: "1.125em",
    margin: "0.5em",
    cursor: "pointer",
  },
  divider: {
    color: "#000",
    opacity: "0.20",
  },
  selectorContainer: {
    marginBottom: "0.25em",
    marginLeft: "0.5em",
  },
}))

const BlogSelectors = props => {
  const classes = useStyles()
  const articles = props.active === "articles" ? <b>Articles</b> : <>Articles</>
  const notes = props.active === "notes" ? <b>Notes</b> : <>Notes</>
  const questions =
    props.active === "questions" ? <b>Questions</b> : <>Questions</>
  const other = props.active === "other" ? <b>Other</b> : <>Other</>

  return (
    <div className={classes.selectorContainer}>
      <Link className={classes.gLink} to="/blog/articles/">
        {articles}
      </Link>
      <span className={classes.divider}>|</span>
      <Link className={classes.gLink} to="/blog/notes/">
        {notes}
      </Link>
      <span className={classes.divider}>|</span>
      <Link className={classes.gLink} to="/blog/questions/">
        {questions}
      </Link>
      {/*
      <span className={classes.divider}>|</span>
      <Link className={classes.gLink} to="/blog/other/">
        {other}
      </Link>*/}
    </div>
  )
}

export default BlogSelectors
