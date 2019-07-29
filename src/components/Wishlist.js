import React, { Component } from 'react';
import './Wishlist.css';
import SharedWishlist from './SharedWishlist';
import OwnWishlist from './OwnWishlist';
import { Button, Alert } from 'react-bootstrap';
import { Auth, API } from "aws-amplify";

class Wishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wishes: [{wish: 'Book', boughtBy: 'Agnes', id: 1}, {wish: 'Candy', boughtBy: '', id: 2}],
      newWishName: '',
      message: '',
      ownList: true
    };

    this.switchMode = this.switchMode.bind(this);
  }

  addWish = async (newWishName) => {
    if(newWishName === '') {
      return;
    }
    const request = {
      body: {wish: newWishName, wishList: this.props.wishlist.id}
    }

    const response = await API.post("wishlists", "/dev/wish", request);
    let newWish = response.wishResponseObject
    this.setState(prevState => ({
      wishes: [...prevState.wishes, newWish],
      message: ''
    }))
  }

  containsWish = (wish) => {
    let list = this.state.wishes
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].wish === wish) {
            return true;
        }
    }
    return false;
  }

  removeItem = (wish) => {
    const newWishes = this.state.wishes.filter(item => {
      return item !== wish;
    });
    this.setState({
      wishes: [...newWishes]
    })
  }

  switchMode() {
    this.setState(state => ({
      ownList: !state.ownList
    }));
  }

  checkWish = async (wish) => {
    let user = await Auth.currentAuthenticatedUser();
    const request = {
      body: {wishID: wish.id}
    }

    await API.post("wishlists", "/dev/grantwish", request);
    let list = this.state.wishes
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === wish) {
          if (list[i].boughtBy === '') {
            list[i].boughtBy = user.userName
          } else {
            list[i].boughtBy = ''
          }
        }
    }
    this.setState({
      wishes: [...list]
    })
  }

  render() {
    let {name, owner} = this.props.wishlist;
    return (
      <div className="list">
        <h3>{name} by {owner}</h3>
        {this.state.ownList ? (
          <OwnWishlist wishes={this.state.wishes} removeItem={this.removeItem} addWish={this.addWish}/>
          ) : (
          <SharedWishlist wishes={this.state.wishes} checkWish={this.checkWish}/>
        )}
        <div className="error-text">
          {this.state.message &&
          <Alert bsStyle='warning'>
            {this.state.message}
          </Alert>
          }
        </div>
        <div>
          <Button bsStyle="link" onClick={this.switchMode} >Switch</Button>
        </div>
      </div>
    );
  }
}

export default Wishlist;
