const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {type: String, required: true},
  img: {data: Buffer, type: String}
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;


// const mongoose = require('mongoose');
// const request = require('request');
// const cheerio = require('cheerio');
//
// const restaurantSchema = new mongoose.Schema({
//   name: { type: String, required: true }
// })
//
// const Restaurant = mongoose.model('Restaurant', restaurantSchema);
//
// const getRestaurants = function(cb) {
//   request(`https://en.wikipedia.org/wiki/List_of_fast_food_restaurant_chains`, (err, res, body) => {
//     let listOfRestaurants = [];
//     if (err) cb(err);
//     let html = body;
//     let $ = cheerio.load(html);
//     let list = $(`a[title="Arby's"]`).first().closest('li').parent().text();
//     list.split(/\n/).forEach(function(restaurant) {
//       let newRestaurant = restaurant.replace(/'/g, "%27");
//       newRestaurant = newRestaurant.replace(/s/g, "_");
//       if (newRestaurant.length > 0) {
//         listOfRestaurants.push(newRestaurant);
//       }
//     })
//     cb(null, listOfRestaurants);
//   })
// }
//
// module.exports = getRestaurants;

// var listOfRestaurants = [];ser
// let searchUrl = `https://en.wikipedia.org/wiki/List_of_fast_food_restaurant_chains`
// axios.get(searchUrl)
// .then(res => {
//   let html = res.data;
//   let $ = cheerio.load(html);
//   let list = $(`a[title="Arby's"]`).first().closest('li').parent().text();
//   list.split(/\n/).forEach(function(restaurant) {
//     let newRestaurant = restaurant.replace(/'/g, "%27");
//     newRestaurant = newRestaurant.replace(/\s/g, "_");
//     if (newRestaurant.length > 0) {
//       listOfRestaurants.push(newRestaurant);
//     }
//   })
//   ServerActions.receiveRestaurants;
//   for (let i = 0; i < listOfRestaurants.length; i++) {
//     axios.get(`https://en.wikipedia.org/wiki/${listOfRestaurants[i]}`)
//     .then(res => {
//       let body = res.data;
//       let ch = cheerio.load(body);
//       let title = ch(`#firstHeading`).text();
//       console.log ('name:', listOfRestaurants[i], 'title:', title);
//     })
//   }
// })
// .then(ServerActions.receiveRestaurants)
// .catch(console.error);
