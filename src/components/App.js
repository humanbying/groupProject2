import React, { Component } from 'react';
import PlayerScreen from './Players/PlayerScreen';
import RestaurantList from './RestaurantList';

// import PlayerActions from '../actions/PlayerActions';
// import RestaurantStore from '../stores/RestaurantStore';

export default class App extends Component {
  constructor() {
    super();

    // this.testRestaurants = this.testRestaurants.bind(this);
  }

  // testRestaurants(e) {
  //   e.preventDefault();
  //   PlayerActions.getAllRestaurants;
  // }

  render() {
    return (
      <div>
        <h1>LogoQuest</h1>
        <RestaurantList />
        <PlayerScreen />
      </div>
    )
  }
}

{/* <button onClick={this.testRestaurants}>Click</button> */}
