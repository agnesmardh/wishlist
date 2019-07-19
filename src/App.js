import React, { Component } from 'react';
import './App.css';
import Wishlist from "./components/Wishlist";
import Lists from "./components/Lists";
import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact, withAuthenticator } from 'aws-amplify-react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
          <div className="FlexContainer">
            <Lists chooseList={this.chooseList} activeList={this.state.activeList}/>
            <div className="WishlistContainer">
              {this.state.activeList && <Wishlist wishlist={this.state.activeList}></Wishlist>}
            </div>
          </div>
      </div>
    );
  }
}

const MyTheme = {
    button: {'backgroundColor': '#88e0d1', 'borderRadius': '4px'},
    navButton: {'backgroundColor': '#88e0d1', 'borderRadius': '4px'}
}


export default withAuthenticator(App, true, [
  <SignIn/>,
  <ConfirmSignIn/>,
  <ConfirmSignUp/>,
  <ForgotPassword/>,
  <RequireNewPassword/>,
  <SignUp/>,
  <VerifyContact/>,
  ], null, MyTheme);
