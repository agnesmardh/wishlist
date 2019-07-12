import React, { Component } from 'react';
import './SharedWith.css';
import { Glyphicon } from 'react-bootstrap';

class ShareList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sharedWith: ['Agnes', 'Mattias'],
      newUserName: '',
    };
  }

  addUser = (newUserName) => {
    const isInlist = this.state.sharedWith.includes(newUserName);
    if(isInlist) {
      //this.setState({
      //  message: 'The wishlist is already shared with this user'
      //})
    } else {
      newUserName !== '' && this.setState(prevState => ({
      sharedWith: [...prevState.sharedWith, newUserName],
      message: ''
      }))
    }
  }

  containsUser = (user) => {
    let list = this.state.sharedWith
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].username === user) {
            return true;
        }
    }
    return false;
  }

  removeUser = (user) => {
    const newUsers = this.state.sharedWith.filter(item => {
      return item !== user;
    });
    this.setState({
      sharedWith: [...newUsers]
    })
  }

  handleChange = (event) => {
    this.setState({newUserName: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault(event)
    this.addUser(this.state.newUserName);
    this.setState({
      newUserName: ''
    })
  }

  handleButtonPress = (event) => {
    this.handleSubmit(event);
  }

  handleKeyPress = (event) => {
    if(event.key==='Enter'){
        this.handleSubmit(event);
    }
  }

  render() {
    return (
      <div>
        <div className="user-container">
          {this.state.sharedWith.map((user) =>
            <div key={user}>
              <span className="share-item"> {user}</span>
              <span className="share-item" onClick={() => this.removeUser(user)}>
                <Glyphicon glyph="remove"/>
              </span>
            </div>
          )}
        <input type="text" value={this.state.newUserName} placeholder="Share with..." className="text-input share-item"
        onChange={this.handleChange} onKeyPress={this.handleKeyPress}
        />
        </div>
      </div>
    );
  }

}

export default ShareList;
