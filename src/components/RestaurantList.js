import React, { Component } from 'react';
import PlayerStore from '../stores/PlayerStore';
import RestaurantStore from '../stores/RestaurantStore';
import PlayerActions from '../actions/PlayerActions';

export default class RestaurantList extends Component {
  constructor() {
    super();

    this.state = {
      restaurants: RestaurantStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    RestaurantStore.on('CHANGE', this._onChange);
    PlayerActions.getAllRestaurants();
  }

  componentWillUnmount() {
    RestaurantStore.removeListener('CHANGE', this._onChange);
  }

  _onChange() {
    this.setState({
      restaurants: RestaurantStore.getAll()
    })
  }

  render() {
    return (
      <p>{this.state.restaurants}</p>
    )
  }
}
