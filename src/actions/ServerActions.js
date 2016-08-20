import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receivePlayers(players) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_PLAYERS',
      players
    })
  },
  receiveRestaurants(restaurants) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_RESTAURANTS',
      restaurants
    })
  }
}

export default ServerActions
