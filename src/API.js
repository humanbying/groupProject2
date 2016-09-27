import axios from 'axios'
import ServerActions from './actions/ServerActions';

const API = {
  getAllPlayers() {
    axios.get('/api/players')
    .then(res => res.data)
    .then(ServerActions.receivePlayers)
    .catch(console.error);
  },
  createPlayer(player) {
    axios.post('/api/players', player)
    .then(res => res.data)
    .then(ServerActions.receiveOnePlayer)
    .catch(console.error);
  },
  deletePlayer(id) {
    axios.delete(`/api/players/${id}`)
    .then(res => res.data)
    .then(ServerActions.deletePlayer)
    .catch(console.error);
  },
  updatePlayer(id, updatePlayer) {
    axios.put(`/api/players/${id}`, updatePlayer)
    .then(res => res.data)
    .then(ServerActions.receivePlayers)
    .catch(console.error)
  },
  getAllRestaurants() {
    axios.get('/api/restaurants')
    .then(res => ServerActions.receiveRestaurants(res.data))
    .catch(console.error);
  }
}

export default API;
