import React, { Component } from 'react';
import path from 'path';

export default class RightChoice extends Component {
  constructor() {
    super();

    this.nextQuestion = this.nextQuestion.bind(this);

    // DELAY rendering of next question by 3 seconds
    setTimeout(this.nextQuestion, 3000);
  }

  // DISPLAY NEXT QUESTION
  nextQuestion() {
    this.props.gameState("question");
    this.props.changeTurn();
  }

  render() {
    // DISPLAY CORRECT CHOICE because player got it right
    let imgPath = path.join(__dirname, `images/${this.props.answer}.png`);

    let playerTurn;
    if (this.props.playerTurn) {
      playerTurn = "Player 1";
    } else {
      playerTurn = "Player 2";
    }

    return (
      <div className="container text-center">
        <div className="row text-center">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <h2 id="verdict">YOU ARE RIGHT!</h2>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <h5 id="playerTurn" className="playerStats">{playerTurn}'s Turn</h5>
            <h6 id="playerOne" className="playerStats">Player 1: <span id = "score">{this.props.player1Score}</span></h6>
            <h6 id="playerTwo" className="playerStats">Player 2: <span id = "score">{this.props.player2Score}</span></h6>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <img src={imgPath} width="350px"/>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1 id="answerPlacement">{this.props.answer}</h1>
          </div>
        </div>
      </div>
    )
  }
}
