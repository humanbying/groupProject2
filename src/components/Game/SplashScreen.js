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
      <div>
        <h2>LOGO QUEST</h2>
        <button onClick={this.startGame}>START GAME</button>
      </div>
    )
  }
}
