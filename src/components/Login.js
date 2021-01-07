import React from 'react';
import { TextField, Button, Container } from '@material-ui/core';

class Login extends React.Component {
  
  login = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true;max-age=60*1000";
    window.location.replace("/listings")
  }
  
  render() {
    return (
      <div>
        <Container maxWidth="md">
          <form className="login-form" onSubmit={this.login}>
            <TextField 
              required
              label="Username"
              type="text"
            />
            <TextField 
              required
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </form>
        </Container>
      </div>
    )
  }
}

export default Login;