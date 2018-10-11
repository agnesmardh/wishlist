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

  removeList = (wishlist) => {
    const newWishlists = this.state.wishlists.filter(item => {
      return item !== wishlist;
    });
    this.setState({
      wishlists: [...newWishlists]
    })
  }

  render() {
    return (
      <div className="Lists">
        <ul className="Wishlists">
          {this.state.wishlists.map((wishlist) =>
            <li key={wishlist.name} onClick={(e) => this.props.chooseList(wishlist)}>
              {wishlist.name} by {wishlist.owner}
              <button onClick={(e) => this.removeList(wishlist)} type="button" className="btn btn-default btn-small">remove</button>
            </li>
          )}
        </ul>
        <AddListForm addList={this.addList}/>
      </div>
    );
  }

}

export default Lists;
