import React from "react"
import Layout from "../components/layout"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

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
