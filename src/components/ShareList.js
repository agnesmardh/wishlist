import React, { Component } from 'react';
import AddForm from './AddForm';

class ShareList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sharedWith: [
        {username:'Agnes'},
        {username:'Mattias'}
      ],
      newUserName: '',
      message: ''
    };
  }

  addUser = (newUserName) => {
    const isInlist = this.state.sharedWith.includes(newUserName);
    if(isInlist) {
      this.setState({
        message: 'The item is already in the list'
      })
    } else {
      let newSharedWith = {username: newUserName}
      newListName !== '' && this.setState(prevState => ({
        wishlists: [...prevState.wishlists, newWishlist],
        message: ''
      }))
      newUserName !== '' && this.setState(prevState => ({
      sharedWith: [...prevState.wishes, newUserName],
      message: ''
      }))
    }
  }

  removeUser = (user) => {
    const newUsers = this.state.wishes.filter(item => {
      return item !== user;
    });
    this.setState({
      wishes: [...newUsers]
    })
  }

  render() {
    return (
      <div>
        <p className="error-text"> {this.state.message} </p>
        <ul>
          {this.state.sharedWith.map((user) =>
            <li key={user.username}>
              <span> {user.username}</span>
              <button onClick={(e) => this.removeUser(user)} type="button" className="btn btn-default btn-small">remove</button>
            </li>
          )}
        </ul>
        <AddForm addItem={this.addUser} placeholder="Share with..."/>
      </div>
    );
  }

}

export default ShareList;
