const mongoose = require('mongoose');

// RESTAURANT SCHEMA for adding new restaurants to database for game
// In backend route, supply name of restaurant and upload image and silhouette image file to public/images
// *Note* Name the image file as same exact name as "name" and silhouette image as "name"-black (Both need to be PNGs)
const restaurantSchema = new mongoose.Schema({
  name: {type: String, required: true},
  img: {data: Buffer, type: String}
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;
