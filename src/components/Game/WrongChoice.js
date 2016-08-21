import React, { Component } from 'react';
import path from 'path';

export default class WrongChoice extends Component {
  constructor() {
    super();

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion(e) {
    e.preventDefault();
    this.props.gameState("question");
  }

  render() {
    let imgPath = path.join(__dirname, `images/${this.props.answer}-black.png`);

    if (this.props.playerTurn) {
      var playerTurn = "Player 1"
    } else {
      var playerTurn = "Player 2"
    }

    return (
      <div>
        <h2>YOU ARE WRONG!</h2>
        <h5>{playerTurn}'s Turn</h5>
        <h6>Player 1: {this.props.player1Score}</h6>
        <h6>Player 2: {this.props.player2Score}</h6>
        <img src={imgPath} width="200px"/>
        <button onClick={this.nextQuestion}>Next</button>
      </div>
    )
  }
}
