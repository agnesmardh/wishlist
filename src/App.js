import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Wishlist from "./components/Wishlist";
import Lists from "./components/Lists";
import Login from "./components/Login";
import { withAuthenticator } from 'aws-amplify-react';

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
          <div>
            <Lists chooseList={this.chooseList} activeList={this.state.activeList}/>
              <div className="List">
                {this.state.activeList && <Wishlist wishlist={this.state.activeList}></Wishlist>}
            </div>
          </div>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
