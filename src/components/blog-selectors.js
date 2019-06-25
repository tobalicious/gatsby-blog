import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  gLink: {
    color: "#000",
    textDecoration: "none",

    margin: "0.5em",
    cursor: "pointer",
  },
}))

const BlogSelectors = props => {
  const classes = useStyles()
  const articles = props.active === "articles" ? <b>Articles</b> : <>Articles</>
  const notes = props.active === "notes" ? <b>Notes</b> : <>Notes</>
  console.log(props.active)
  const questions =
    props.active === "questions" ? <b>Questions</b> : <>Questions</>

  return (
    <div>
      <Link className={classes.gLink} to="/blog/articles/">
        {articles}
      </Link>
      |
      <Link className={classes.gLink} to="/blog/notes/">
        {notes}
      </Link>
      |
      <Link className={classes.gLink} to="/blog/questions/">
        {questions}
      </Link>
    </div>
  )
}

export default BlogSelectors
