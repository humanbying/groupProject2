import React, { Component } from 'react';

export default class SplashScreen extends Component {
  constructor() {
    super();

    this.startGame = this.startGame.bind(this);
  }

  // ACTION TRIGGERD TO START GAME
  startGame(e) {
    e.preventDefault();
    this.props.gameState("question");
  }

  render() {
    return (
      <div className="container text-center" id="splash">
        <div className="row text-center">
          <h2><img src="images/iconoQuizIcon.png" width="200px"/><span id="title">icono<b>Quiz</b></span></h2>
        </div>
        <div className="row text-center">
          <button className=".btn.raised startGameButton" onClick={this.startGame}>start game</button>
        </div>
      </div>
    )
  }
}
