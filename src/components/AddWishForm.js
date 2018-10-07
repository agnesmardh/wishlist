import React, { Component } from 'react';

class AddWishForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newWishName: ''
    };
  }

  handleChange = (event) => {
    this.setState({newWishName: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addWish(this.state.newWishName);
    this.setState({
      newWishName: ''
    })
  }

  render() {
    return (
      <form id='form' onSubmit={this.handleSubmit}>
        <label>
          Add a wish :
          <input type="text" id='input-field' value={this.state.newWishName} onChange={this.handleChange} />
        </label>
      <input type="submit" value="Add" />
      </form>
    );
  }

}

export default AddWishForm;
