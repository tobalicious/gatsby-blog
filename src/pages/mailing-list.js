import React from "react"
import Layout from "../components/layout"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}))

export default class MailingList extends React.Component {
  state = {
    email: "",
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log("working")
    const result = await addToMailchimp(this.state.email)
    console.log(result)
  }

  handleChange = newString => {
    this.setState({ email: newString })
  }

  render() {
    //const classes = useStyles()
    return (
      <Layout>
        <Container
          maxWidth="sm"
          style={{
            marginTop: "2em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              marginBottom: "0.5em",
            }}
          >
            Join the Mailing List
          </div>
          <TextField
            id="outlined-email-input"
            label="Email"
            style={{ width: "70%" }}
            onChange={e => this.handleChange(e.target.value)}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            color="primary"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ width: "40%" }}
            onClick={e => this.handleSubmit(e)}
          >
            Submit
          </Button>
        </Container>
      </Layout>
    )
  }
}

/*
import addToMailchimp from 'gatsby-plugin-mailchimp'
...

export default class MyGatsbyComponent extends React.Component {
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  // 1. via `.then`
  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email, listFields) // listFields are optional if you are only capturing the email address.
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
  }

  // 2. via `async/await`
  _handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email, listFields)
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit(email, {listFields})}>
        ...
      </form>
    )
  }
}
*/
