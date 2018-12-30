import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

class AddForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: ''
    };
  }

  handleChange = (event) => {
    this.setState({newItem: event.target.value});
  }

  handleSubmit = () => {
    this.props.addItem(this.state.newItem);
    this.setState({
      newItem: ''
    })
  }

  handleButtonPress = (event) => {
    event.preventDefault();
    this.handleSubmit();
  }

  handleKeyPress = (event) => {
    if(event.key==='Enter'){
        this.handleSubmit();
    }
  }


  render() {
    return (
      <Form inline>
        <FormControl
           type="text"
           value={this.state.newItem}
           placeholder={this.props.placeholder}
           onChange={this.handleChange}
           onKeyPress={this.handleKeyPress}
         />
       <Button bsSize="small"
          onClick={this.handleSubmit}>Add
       </Button>
      </Form>
    );
  }

}

export default AddForm;
