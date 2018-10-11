import React, { Component } from 'react';
import AddListForm from "./AddListForm";

class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wishlists: [
        {name: 'My wishlist', owner: 'Agnes'},
        {name: 'Books', owner: 'Mattias'}
      ]
    };
  }

  addList = (newListName) => {
    let newWishlist = {name: newListName, owner: 'Agnes'}
    newListName !== '' && this.setState(prevState => ({
    wishlists: [...prevState.wishlists, newWishlist]
    }))
  }

  render() {
    return (
      <div className="Lists">
        <ul className="Wishlists">
          {this.state.wishlists.map((wishlist) =>
            <li key={wishlist.name} onClick={(e) => this.props.chooseList(wishlist)}>
              {wishlist.name} by {wishlist.owner}
            </li>
          )}
        </ul>
        <AddListForm addList={this.addList}/>
      </div>
    );
  }

}

export default Lists;
