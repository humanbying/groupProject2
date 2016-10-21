import AppDispatcher from '../AppDispatcher';

// ALL ACTIONS AFTER REQUEST TO SERVER
const ServerActions = {
  // DISPATCH RETRIEVAL OF ALL RESTAURANTS
  receiveRestaurants(restaurants) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_RESTAURANTS',
      restaurants
    })
  }
};

export default ServerActions;
