// const cheerio = require('cheerio');
// const axios = require('axios');
// const React = require('react');
// const { render } = require('react-dom');
//
// let query = 'catch me if you can';
//
// var listOfRestaurants = [];
//
// let searchUrl = `https://en.wikipedia.org/wiki/List_of_fast_food_restaurant_chains`
// axios.get(searchUrl)
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
//   .catch(err => {
//     console.log ('err:', err);
//   });
