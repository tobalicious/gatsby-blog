import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../theme"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  gLink: {
    color: "#fff",
    textDecoration: "none",
    margin: "0.5em",
    cursor: "pointer",
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <header>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar color="primary">
            <Typography className={classes.title} variant="h5" color="inherit">
              <b>TOB</b>
            </Typography>
            <Link to="/blog/articles" className={classes.gLink}>
              <b>Blog</b>
            </Link>
            {/*<Link to="/resume" className={classes.gLink}>
                <b>Resume</b>
              </Link>
              */}
            <Link to="/mailing-list" className={classes.gLink}>
              <b>Mailing List</b>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
