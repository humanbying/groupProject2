import React, { Component } from 'react';
import path from 'path';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    let imgPath = path.join(__dirname, `images/${this.props.answer}-black.png`);
    return (
      <div className = "container">
        <img src={imgPath} max-height="350px" width="350px"/>
      </div>
    )
  }
}
