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
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h2 id="verdict">GAME OVER!</h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h5 id="finalScore" className="playerStats">Final Score:</h5>
            <h6 id="finalPlayers" className="playerStats">Player 1: <b>{this.props.player1Score}</b></h6>
            <h6 id="finalPlayers" className="playerStats">Player 2: <b>{this.props.player2Score}</b></h6>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1 id="playerWins">{Winner} Wins!</h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <button className=".btn.raised startGameButton" onClick={this.props.quit}>play again</button>
          </div>
        </div>
      </div>
    )
  }

}
