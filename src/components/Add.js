import React from 'react';
import {v4 as uuid} from 'uuid';
import { Container, TextField, Button } from '@material-ui/core';

class Add extends React.Component {
  state = {
    id: 0,
    name: '',
    address: '',
    hours: '',
    description: ''
  }

  handleTextChange = (e) => {
    this.setState({
      id: uuid(),
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const listing = this.state;
    this.props.addListing(listing);
  }

  render() {
    return (
      <div>
        <Container maxWidth="lg" style={{display: "flex"}}>
          <Container maxWidth="sm">
            <form className="add-form" onSubmit={this.handleSubmit}>
              <TextField 
                placeholder="Name" 
                type="text" name="name" 
                value={this.state.name} 
                onChange={this.handleTextChange} 
              />
              <TextField 
                placeholder="Address" 
                type="text" 
                name="address" 
                value={this.state.address} 
                onChange={this.handleTextChange} 
              />
              <TextField 
                placeholder="Hours (ex: 8AM - 9PM)" 
                type="text" 
                name="hours" 
                value={this.state.hours} 
                onChange={this.handleTextChange} 
              />
              <TextField 
                placeholder="Description" 
                type="text" 
                name="description" 
                value={this.state.description} 
                onChange={this.handleTextChange} 
              />
              <br />
              <Button variant="contained" color="secondary" type="submit">SAVE</Button>
            </form>
          </Container>
          <Container maxWidth="sm">
            {/* google maps placeholder */}
          </Container>
        </Container>
      </div>
    )
  }
}

export default Add;