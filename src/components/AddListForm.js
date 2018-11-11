import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class AddListForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newListName: ''
    };
  }

  handleChange = (event) => {
    this.setState({newListName: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addList(this.state.newListName);
    this.setState({
      newListName: ''
    })
  }

  render() {
    return (
      <div className="input-group input-group-sm mb-3">
        <input type="text" className="form-control" placeholder="Wishlist name"
        value={this.state.newListName} onChange={this.handleChange}/>
        <div className="input-group-append">
          <Button onClick={this.handleSubmit}>Add</Button>
          <button className="btn btn-outline-secondary" type="button" onClick={this.handleSubmit}>Add</button>
        </div>
      </div>
    );
  }

}

export default AddListForm;
