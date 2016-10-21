import React, { Component } from 'react';
import _ from 'lodash';
import Logo from './Logo';

import PlayerActions from '../../actions/PlayerActions';
import RestaurantStore from '../../stores/RestaurantStore';

export default class Question extends Component {
  constructor() {
    super();

    // At initial state, get all restaurants from store
    this.state = {
      restaurants: RestaurantStore.getAll(),
      answer: '',
      answerId: '',
      dummy1: '',
      dummy2: '',
      options: '',
      turn: ''
    }

    // bind functions to lexical this
    this._onChange = this._onChange.bind(this);
    this.guess = this.guess.bind(this);
  }

  // START listening to store
  componentDidMount() {
    RestaurantStore.startListening(this._onChange);
    PlayerActions.getAllRestaurants();
  }

  // STOP listening to store
  componentWillUnmount() {
    RestaurantStore.stopListening(this._onChange);
  }

  _onChange() {
    // GET ALL RESTAURANTS from RestaurantStore if restaurants change
    this.setState({
      restaurants: RestaurantStore.getAll()
    });

    if (this.state.restaurants.length) {
      let restaurants = this.state.restaurants;

      // Logic to get random restaurant for question
      let answerId = Math.floor(Math.random() * restaurants.length);

      // Set the answer as the restaurant with the index chosen randomly
      let answer = restaurants[answerId].name;

      // Get two wrong choices to display with correct choice
      let dummy1Restaurants = restaurants.filter(function(restaurant) {
        if (restaurant.name !== answer) return true;
      })
      let dummy1 = dummy1Restaurants[Math.floor(Math.random() * dummy1Restaurants.length)].name;
      let dummy2Restaurants = dummy1Restaurants.filter(function(restaurant) {
        if (restaurant.name !== dummy1) return true;
      })
      let dummy2 = dummy2Restaurants[Math.floor(Math.random() * dummy2Restaurants.length)].name;

      // To show all choices for question
      let options = [answer, dummy1, dummy2];

      this.setState({ answer, answerId, dummy1, dummy2, options });

      // To render question
      this.props.changeAnswer(this.state.answer);
    }

    // Based on playerTurn boolean change turns
    if (this.props.playerTurn) {
      this.setState({turn: "Player 1"});
    } else {
      this.setState({turn: "Player 2"});
    }

  }

  guess(e) {
    // if the guessed answer is correct, player is right and add to score
    if (e.target.innerText === this.state.answer) {
      this.props.gameState("right");
      this.props.addScore();
    } else {
      this.props.gameState("wrong");
    }
  }

  render() {
    // SHUFFLE choices so that they are displayed in random order - thanks lodash
    const choices = _.shuffle(this.state.options).map((option, index) => {
      return (
        <div key={index}>
          <button id="choiceButtons" onClick={this.guess}>{option}</button>
        </div>
      )
    })

    return (
      <div>
        <h2 id="title"><img src="images/iconoQuizIcon.png" width="120px"/>icono<b>Quiz</b></h2>
        <br />
        <div id="playerStats">
          <h5 id="playerTurn">{this.state.turn}'s Turn</h5>
          <h6 id="playerOne">Player 1: <span id="score">{this.props.player1Score}</span></h6>
          <h6 id="playerTwo">Player 2: <span id="score">{this.props.player2Score}</span></h6>
        </div>
        <div id="guessImage">
          <Logo answer={this.state.answer}/>
        </div>
        <div id="choices">
          {choices}
        </div>
      </div>
    )
  }
}
