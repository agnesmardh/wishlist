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
      <div className="input-group input-group-sm mb-3">
        <input type="text" className="form-control" placeholder="Wish"
        value={this.state.newWishName} onChange={this.handleChange}/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={this.handleSubmit}>Add</button>
        </div>
      </div>
    );
  }

}

export default AddWishForm;
