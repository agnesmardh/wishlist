import React, { Component } from 'react';
import './Wishlist.css';
import Wish from './Wish';
import AddWishForm from './AddWishForm';

class Wishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wishes: ["1", "2"],
      newWishName: '',
      message: '',
      editMode: true
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

  removeItem(wish) {
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
          this.state.editMode
          ? (
            <div>
            <p className="Error-text"> {this.state.message} </p>
            <ul className = "List">
            {this.state.wishes.map((wish) => <li className="Item">
            <Wish text={wish}></Wish>
            <button onClick={(e) => this.removeItem(wish)} type="button" className="btn btn-default btn-small">remove</button>
            </li>)}
            </ul>

            <AddWishForm addWish={this.addWish}/>
            </div>
          )
          :
          <div>
            <p>Not implemented yet</p>
          </div>
        }
        <button onClick={this.switchMode} type="button" className="btn btn-default btn-small">Switch</button>
      </div>
    );
  }
}

export default Wishlist;
