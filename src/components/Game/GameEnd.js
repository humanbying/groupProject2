import React, { Component } from 'react';

export default class RightChoice extends Component {
  constructor() {
    super();

  }

  render() {
    let Winner;
    if (this.props.player1Score === 5) {
      Winner = "Player 1";
    } else {
      Winner = "Player 2";
    }

    return (
      <div>
        <h2>GAME OVER</h2>
        <h2>Final Score:</h2>
        <h4>Player 1: {this.props.player1Score}</h4>
        <h4>Player 2: {this.props.player2Score}</h4>
        <h1>{Winner} wins!</h1>
      </div>
    )
  }
}
