import React, { Component } from 'react';
import './Header.css';
import {Greetings, SignOut} from 'aws-amplify-react';
import SignOutButton from './SignOutButton.js'

class Header extends Greetings {
  render() {
    return (
      <header className="header">
        <h1 className="title">Welcome to Enabling wishlist</h1>
        <SignOutButton/>
      </header>
    );
  }
}

export default Header;
