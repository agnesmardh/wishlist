import React, { Component } from 'react';
import AddListForm from "./AddListForm";
import { API } from "aws-amplify";


class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wishlists: [
        //{name: 'My wishlist', owner: 'Agnes'},
        //{name: 'Books', owner: 'Mattias'}
      ]
    };
  }

  componentDidMount() {
    const wishlistsPromise = this.getWishlists();
    wishlistsPromise.then(json => {
      this.setState({
        wishlists : json.body
      });
    })
  }

  getWishlists = async () => {
    const response = await API.get("wishlists", "/dev/wishlists")
    console.log(response);
    return response;
  }

  addList = (newListName) => {
    let newWishlist = {name: newListName, owner: 'Agnes'}
    newListName !== '' && this.setState(prevState => ({
      wishlists: [...prevState.wishlists, newWishlist]
    }))
  }

  findNewChosenList = (wishlists, listToRemove) => {
    if(wishlists.length > 1) {
      const index = wishlists.indexOf(listToRemove);
      if(index === 0) {
        return wishlists[index + 1]
      } else {
        return wishlists[index - 1]
      }
    }
    return null;
  }

  removeList = (listToRemove) => {
    const wishlists = this.state.wishlists;
    if(listToRemove === this.props.activeList) {
      const chosenList = this.findNewChosenList(wishlists, listToRemove);
      this.props.chooseList(chosenList);
    }

    const newWishlists = wishlists.filter(item => {
      return item !== listToRemove;
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
            <li key={wishlist.name}>
              <span onClick={(e) => this.props.chooseList(wishlist)}> {wishlist.name} by {wishlist.owner} </span>
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
