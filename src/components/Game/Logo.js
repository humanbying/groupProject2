import React, { Component } from 'react';
import path from 'path';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // ANSWER is the correct image and the silhouette is displayed
    let imgPath = path.join(__dirname, `images/${this.props.answer}-black.png`);

    return (
      <div>
        <img src={imgPath} width="350px" onClick={this.props.quit}/>
      </div>
    )
  }

}
