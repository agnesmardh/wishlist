import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Wishlist from "./components/Wishlist";
import Lists from "./components/Lists";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeList: {
        name: "My Wishlist",
        owner: "Agnes"
      }
    };
  }

  chooseList = (wishlist) => {
    this.setState({
      activeList: wishlist
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Lists wishlists={this.state.wishlists} chooseList={this.chooseList}/>
        <div className="List">
          <Wishlist wishlist={this.state.activeList}></Wishlist>
        </div>
      </div>
    );
  }
}

export default App;
