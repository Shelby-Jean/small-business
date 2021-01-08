import React, { useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const login = (e) => {
    e.preventDefault();
    const user = {username, password}
    document.cookie = "loggedIn=true;max-age=60*1000";
    props.logIn();
    props.setUser(user);
    history.push("/listings");
  }
  
  return (
    <div>
      <Container maxWidth="md">
        <form className="login-form" onSubmit={login}>
          <TextField 
            required
            label="Username"
            type="text"
            value={username}
            onChange={handleUsername}
          />
          <TextField 
            required
            label="Password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <br />
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

export default Login;