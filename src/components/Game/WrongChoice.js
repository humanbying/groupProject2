import React, { Component } from 'react';
import path from 'path';

export default class WrongChoice extends Component {
  constructor() {
    super();

    this.nextQuestion = this.nextQuestion.bind(this);
    setTimeout(this.nextQuestion, 3000);
  }

  // NEXT QUESTION
  nextQuestion() {
    this.props.gameState("question");
    this.props.changeTurn();
  }

  render() {
    // Never display correct choice unless user gets it right
    let imgPath = path.join(__dirname, `images/${this.props.answer}-black.png`);

    if (this.props.playerTurn) {
      var playerTurn = "Player 1"
    } else {
      var playerTurn = "Player 2"
    }

    return (
      <div>
        <h2 id="verdict">YOU ARE WRONG!</h2>
        <div id="playerStats">
          <h5 id="playerTurn">{playerTurn}'s Turn</h5>
          <h6 id="playerOne">Player 1: <span id="score">{this.props.player1Score}</span></h6>
          <h6 id="playerTwo">Player 2: <span id="score">{this.props.player2Score}</span></h6>
        </div>
        <div id="guessImage">
        <img src={imgPath} width="350px"/>
        </div>
      </div>
    )
  }
}
