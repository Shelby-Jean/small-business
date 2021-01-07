import React from 'react';
import { Container, TextField, Button } from '@material-ui/core';

class Add extends React.Component {

  render() {
    return (
      <div>
        <Container maxWidth="lg" style={{display: "flex"}}>
          <Container maxWidth="sm">
            <form className="add-form">
              <TextField placeholder="Name" type="text" />
              <TextField placeholder="Address" type="text" />
              <TextField placeholder="Hours (ex: 8AM - 9PM)" type="text" />
              <TextField placeholder="Description" type="text" />
              <br />
              <Button variant="contained" color="secondary" type="submit">SAVE</Button>
            </form>
          </Container>
          <Container maxWidth="sm">

          </Container>
        </Container>
      </div>
    )
  }
}

export default Add;