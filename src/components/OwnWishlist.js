import React, { Component } from 'react';
import Wish from './Wish';
import AddForm from './AddForm';
import ShareList from './ShareList';
import { Glyphicon } from 'react-bootstrap';

class OwnWishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="list">
        <ShareList/>
        <ul className = "list">
          {this.props.wishes.map((wish) =>
            <li className="item" key={wish.wish}>
              <Wish text={wish.wish}></Wish>
              <span onClick={(e) => this.props.removeItem(wish)}>
                <Glyphicon glyph="trash"/>
              </span>
            </li>
          )}
        </ul>
        <AddForm addItem={this.props.addWish} placeholder="Wish"/>
      </div>
    );
  }
}

export default OwnWishlist;
