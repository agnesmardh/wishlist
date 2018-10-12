import React, { Component } from 'react';
import './SharedWishlist.css'

class SharedWishlist extends Component {

  render() {
    return (
      <div className="sharedList">
      {this.props.wishes.map((wish) =>
        <div className="checkbox" key={wish}>
          <label><input type="checkbox" value=""/>{wish}</label>
        </div>
      )}
      </div>
    );
  }

}

export default SharedWishlist;
