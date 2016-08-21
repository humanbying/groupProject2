import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receivePlayers(players) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_PLAYERS',
      players
    })
  },
  receiveOnePlayer(player) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_PLAYER',
      player
    })
  },
  deletePlayer(id) {
    AppDispatcher.dispatch({
      type: 'DELETE_PLAYER',
      id
    })
  },
  updatePlayer(player) {
    AppDispatcher.dispatch({
      type: 'UPDATE_PLAYER',
      player
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
