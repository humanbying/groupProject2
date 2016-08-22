import React, { Component } from 'react';
import SplashScreen from './Game/SplashScreen';
import Question from './Game/Question';
import RightChoice from './Game/RightChoice';
import WrongChoice from './Game/WrongChoice';
import GameEnd from './Game/GameEnd';
import '../css/style.css'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      gameState: "start",
      turn: true,
      player1Score: 0,
      player2Score: 0,
      answer: ""
    }

    this.addScore = this.addScore.bind(this);
    this.changeTurn = this.changeTurn.bind(this);
    this.changeState = this.changeState.bind(this);
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  addScore() {
    if (this.state.turn) {
      this.setState({player1Score: this.state.player1Score + 1});
    } else {
      this.setState({player2Score: this.state.player2Score + 1});
    }
  }

  changeTurn() {
    if (this.state.turn) {
      this.setState({turn: false});
    } else {
      this.setState({turn: true});
    }
  }

  changeState(next) {
    this.setState({gameState: next});
  }

  changeAnswer(answer) {
    this.setState({ answer });
  }

  render() {
    if (this.state.player1Score === 5 || this.state.player2Score === 5) {
      return (
        <GameEnd player1Score={this.state.player1Score} player2Score={this.state.player2Score}/>
      )
    } else {
      switch (this.state.gameState) {
        case "start":
        return (
          <SplashScreen gameState={this.changeState}/>
        )
        break;
        case "question":
        return (
          <Question
          gameState={this.changeState}
          changeAnswer={this.changeAnswer}
          changeTurn={this.changeTurn}
          playerTurn={this.state.turn}
          player1Score={this.state.player1Score}
          player2Score={this.state.player2Score}
          addScore={this.addScore}
          />
        )
        break;
        case "right":
        return (
          <RightChoice
            gameState={this.changeState}
            answer={this.state.answer}
            playerTurn={this.state.turn}
            player1Score={this.state.player1Score}
            player2Score={this.state.player2Score}
            changeTurn={this.changeTurn}
          />
        )
        break;
        case "wrong":
        return (
          <WrongChoice
            gameState={this.changeState}
            answer={this.state.answer}
            playerTurn={this.state.turn}
            player1Score={this.state.player1Score}
            player2Score={this.state.player2Score}
            changeTurn={this.changeTurn}
          />
        )
        break;
      }
    }
    // return (
    //   <div>
    //     <h1>LogoQuest</h1>
    //     <RestaurantList />
    //   </div>
    // )
  }
}
