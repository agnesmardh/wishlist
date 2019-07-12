import React, { Component } from 'react';
import {Auth} from "aws-amplify";
import { Button } from 'react-bootstrap';

class SignOutButton extends Component {

  handleSubmit = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Button
         onClick={this.handleSubmit}>Sign out
      </Button>
    );
  }
}

export default SignOutButton;
