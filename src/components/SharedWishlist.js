import React, { Component } from 'react';

class SharedWish extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
      {this.props.wishes.map((wish) =>
        <div className="checkbox" key={wish}>
          <label><input type="checkbox" value=""/>{wish}</label>
        </div>
      )}
      </div>
    );
  }

}

export default SharedWish;
