import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Wishlist from "./components/Wishlist";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wishlists: [
        {name: 'My wishlist', owner: 'Agnes'},
        {name: 'Books', owner: 'Mattias'}
      ]
    };
  }

  render() {
    let wishlist = {
      name: "My Wishlist",
      owner: "Agnes"
    };

    return (
      <div className="App">
        <Header></Header>
        <div className="Lists">
          <ul className="Wishlists">
            {this.state.wishlists.map((wishlist) =>
              <li key={wishlist.name}>
                {wishlist.name} by {wishlist.owner}
              </li>
            )}
          </ul>
        </div>
        <div className="List">
          <Wishlist wishlist = {wishlist}></Wishlist>
        </div>
      </div>
    );
  }
}

export default App;
