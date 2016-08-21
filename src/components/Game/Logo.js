import React, { Component } from 'react';
import path from 'path';

export default class Logo extends Component {
  render() {
    let imgPath = path.join(__dirname, `images/${this.props.answer}-black.png`);
    return (
      <img src={imgPath} width="200px"/>
    )
  }
}

// img src={this.props.answerId}
