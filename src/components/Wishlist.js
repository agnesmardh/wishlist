import React, { Component } from 'react';
import './Wishlist.css';
import SharedWishlist from './SharedWishlist';
import OwnWishlist from './OwnWishlist';
import { Button, Alert } from 'react-bootstrap';

class Wishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wishes: [{wish: 'Book', boughtBy: 'Agnes'}, {wish: 'Candy', boughtBy: ''}],
      newWishName: '',
      message: '',
      ownList: true
    };

    this.switchMode = this.switchMode.bind(this);
  }

  addWish = (newWishName) => {
    const newWish = {wish: newWishName, boughtBy: ''}
    const isInlist = this.containsWish(newWishName);
    if(isInlist) {
      this.setState({
        message: 'The item is already in the list'
      })
    } else {
      newWishName !== '' && this.setState(prevState => ({
      wishes: [...prevState.wishes, newWish],
      message: ''
      }))
    }
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

  checkWish = (wish) => {
    let list = this.state.wishes
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === wish) {
          if (list[i].boughtBy === '') {
            list[i].boughtBy = 'User'
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
