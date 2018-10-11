import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Wishlist from "./components/Wishlist";
import Lists from "./components/Lists";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wishlists: [
        {name: 'My wishlist', owner: 'Agnes'},
        {name: 'Books', owner: 'Mattias'}
      ],
      activeList: {
        name: "My Wishlist",
        owner: "Agnes"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Lists wishlists={this.state.wishlists}/>
        <div className="List">
          <Wishlist wishlist = {this.state.activeList}></Wishlist>
        </div>
      </div>
    );
  }
}

export default App;
