import React, { Component } from 'react';
import './OwnWishlist.css';
import Wish from './Wish';
import AddWishForm from './AddWishForm';

class OwnWishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div className="list">
        <p className="error-text"> {this.state.message} </p>
          <ul className = "list">
          {this.props.wishes.map((wish) =>
            <li className="item" key={wish}>
              <Wish text={wish}></Wish>
              <button onClick={(e) => this.props.removeItem(wish)} type="button" className="btn btn-default btn-small">remove</button>
            </li>
          )}
          </ul>
          <AddWishForm addWish={this.props.addWish}/>
      </div>
    );
  }
}

export default OwnWishlist;
