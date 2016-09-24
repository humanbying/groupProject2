import API from '../API';

const PlayerActions = {
  getAllPlayers: API.getAllPlayers,
  createPlayer(player) {
    API.createPlayer(player);
  },
  deletePlayer(id) {
    API.deletePlayer(id);
  },
  updatePlayer(id, updatePlayer) {
    API.updatePlayer(id, updatePlayer);
  },
  getAllRestaurants: API.getAllRestaurants
};

export default PlayerActions;
