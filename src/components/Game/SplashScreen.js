import React, { Component } from 'react';

export default class SplashScreen extends Component {
  constructor() {
    super();

    this.startGame = this.startGame.bind(this);
  }

  startGame(e) {
    e.preventDefault();
    this.props.gameState("question");
  }

  render() {
    return (
      <div id = "splash">
        <h2><img src = "images/iconoQuizIcon.png"/><span id="title"><span id = "splashTitle">icono<b>Quiz</b></span></span></h2>
        <button className = ".btn.raised" id = "startGameButton"onClick={this.startGame}>start game</button>
      </div>
    )
  }
}
