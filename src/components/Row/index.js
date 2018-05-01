import React, { Component } from 'react';
import './styles.css';

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
}

export default Row;