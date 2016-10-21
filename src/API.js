import axios from 'axios'
import ServerActions from './actions/ServerActions';

const API = {
  // API CALL TO GET RESTAURANTS
  getAllRestaurants() {
    axios.get('/api/restaurants')
    .then(res => ServerActions.receiveRestaurants(res.data))
    .catch(console.error);
  }
}

export default API;
