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
  // getAllRestaurants() {
  //   var listOfRestaurants = [];
  //   let searchUrl = `https://en.wikipedia.org/wiki/List_of_fast_food_restaurant_chains`
  //   axios.get(searchUrl)
  //   .then(res => {
  //     let html = res.data;
  //     let $ = cheerio.load(html);
  //     let list = $(`a[title="Arby's"]`).first().closest('li').parent().text();
  //     list.split(/\n/).forEach(function(restaurant) {
  //       let newRestaurant = restaurant.replace(/'/g, "%27");
  //       newRestaurant = newRestaurant.replace(/\s/g, "_");
  //       if (newRestaurant.length > 0) {
  //         listOfRestaurants.push(newRestaurant);
  //       }
  //     })
  //     ServerActions.receiveRestaurants;
  //     for (let i = 0; i < listOfRestaurants.length; i++) {
  //       axios.get(`https://en.wikipedia.org/wiki/${listOfRestaurants[i]}`)
  //       .then(res => {
  //         let body = res.data;
  //         let ch = cheerio.load(body);
  //         let title = ch(`#firstHeading`).text();
  //         console.log ('name:', listOfRestaurants[i], 'title:', title);
  //       })
  //     }
  //   })
  //   .then(ServerActions.receiveRestaurants)
  //   .catch(console.error);
  // }
}



export default API;
