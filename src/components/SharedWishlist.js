import React, { Component } from 'react';
import './SharedWishlist.css'
import { Checkbox } from 'react-bootstrap';


class SharedWishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div className="sharedList">
      {this.props.wishes.map((wish) =>
        <Checkbox key={wish.wish} defaultChecked={wish.boughtBy !== ''} onClick={() => this.props.checkWish(wish)}>
          {wish.wish}
          {wish.boughtBy &&
            <span> bought by {wish.boughtBy}</span>
          }
        </Checkbox>
      )}
      </div>
    );
  }

}

export default SharedWishlist;
