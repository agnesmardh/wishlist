import React, { Component } from 'react';
import './Wishlist.css';
import SharedWishlist from './SharedWishlist';
import OwnWishlist from './OwnWishlist';

class Wishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wishes: ["1", "2"],
      newWishName: '',
      message: '',
      ownList: true
    };

    this.switchMode = this.switchMode.bind(this);
  }

  addWish = (newWishName) => {
    const isInlist = this.state.wishes.includes(newWishName);
    if(isInlist) {
      this.setState({
        message: 'The item is already in the list'
      })
    } else {
      newWishName !== '' && this.setState(prevState => ({
      wishes: [...prevState.wishes, newWishName],
      message: ''
      }))
    }
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
      editMode: !state.editMode
    }));
  }

  render() {
    let {name, owner} = this.props.wishlist;
    return (
      <div>
        <h3>{name} by {owner}</h3>

        {
          this.state.ownList
          ? (
            <div>
              <OwnWishlist wishes={this.state.wishes} removeItem={this.removeItem} addWish={this.addWish}/>
            </div>
          )
          :
          <div>
            <SharedWishlist wishes={this.state.wishes}/>
          </div>
        }
        <div>
          <button onClick={this.switchMode} type="button" className="btn btn-default btn-small">Switch</button>
        </div>
      </div>
    );
  }
}

export default Wishlist;
