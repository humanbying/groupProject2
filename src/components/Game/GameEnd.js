import React, { Component } from 'react';

export default class RightChoice extends Component {
  constructor() {
    super();
  }

  render() {
    let Winner;
    // RECEIVE SCORES FROM PROPS

    // FIRST TO FIVE WINS
    if (this.props.player1Score === 5) {
      Winner="Player 1";
    } else {
      Winner="Player 2";
    }

    return (
      <div>
        <h2 id="verdict">GAME OVER!</h2>
        <h2 id="finalScore">Final Score:</h2>
        <hr/>
        <h4 id="finalPlayers">Player 1: <b>{this.props.player1Score}</b></h4>
        <h4 id="finalPlayers">Player 2: <b>{this.props.player2Score}</b></h4>
        <h1 id="playerWins">{Winner} Wins!</h1>
      </div>
    )
  }

}
