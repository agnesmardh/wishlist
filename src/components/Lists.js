import React, { Component } from 'react';

class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newList: {
        newName: "",
        newOwner: ""
      }
    };
  }

  render() {
    return (
      <div className="Lists">
        <ul className="Wishlists">
          {this.props.wishlists.map((wishlist) =>
            <li key={wishlist.name}>
              {wishlist.name} by {wishlist.owner}
            </li>
          )}
        </ul>
      </div>
    );
  }

}

export default Lists;
