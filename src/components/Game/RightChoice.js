import React, { Component } from 'react';
import path from 'path';

export default class RightChoice extends Component {
  constructor() {
    super();

    this.nextQuestion = this.nextQuestion.bind(this);

    setTimeout(this.nextQuestion, 3000);
  }

  nextQuestion() {
    this.props.gameState("question");
    this.props.changeTurn();
  }

  render() {
    let imgPath = path.join(__dirname, `images/${this.props.answer}.png`);

    if (this.props.playerTurn) {
      var playerTurn = "Player 1";
    } else {
      var playerTurn = "Player 2";
    }


    return (
      <div>
        <h2>YOU ARE RIGHT!</h2>
        <h5>{playerTurn}'s Turn</h5>
        <h6>Player 1: {this.props.player1Score}</h6>
        <h6>Player 2: {this.props.player2Score}</h6>
        <img src={imgPath} width="200px"/>
        <h1>{this.props.answer}</h1>
      </div>
    )

  }
}

//img src={this.props.answerId}
