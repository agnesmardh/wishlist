import React, { Component } from 'react';
import './Wishlist.css';
import Wish from './Wish';

class Wishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wishes: ["1", "2"],
      newWishName: '',
      message: '',
      editMode: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchMode = this.switchMode.bind(this);
  }

  handleChange(event) {
    this.setState({newWishName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const newWishName = this.state.newWishName;
    const isInlist = this.state.wishes.includes(newWishName);
    if(isInlist) {
      this.setState({
        message: 'The item is already in the list'
      })
    } else {
      newWishName !== '' && this.setState(prevState => ({
      wishes: [...prevState.wishes, this.state.newWishName],
      message: ''
      }))
    }
    this.setState({
      newWishName: ''
    })
  }

  removeItem(wish) {
    const newWishes = this.state.wishes.filter(item => {
      return item !== wish;
    });
    this.setState({
      wishes: [...newWishes]
    })
  }

  switchMode() {
    this.setState(state => ({
      editMode: !state.editMode
    }));
  }

  render() {
    let {name, owner} = this.props.wishlist;
    return (
      <div>
        <h3>{name} by {owner}</h3>

        {
          this.state.editMode
          ? (
            <div>
            <p className="Error-text"> {this.state.message} </p>
            <ul className = "List">
            {this.state.wishes.map((wish) => <li className="Item">
            <Wish text={wish}></Wish>
            <button onClick={(e) => this.removeItem(wish)} type="button" className="btn btn-default btn-small">remove</button>
            </li>)}
            </ul>

            <form id='form' onSubmit={this.handleSubmit}>
            <label>
              Add a wish :
              <input type="text" id='input-field' value={this.state.newWishName} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Add" />
          </form>
          <Wish text='This is my wish'></Wish>
          </div>
          )
          :
          <div>
            <p>Not implemented yet</p>
          </div>
        }
        <button onClick={this.switchMode} type="button" className="btn btn-default btn-small">Switch</button>
      </div>
    );
  }
}

export default Wishlist;
