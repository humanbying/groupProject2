const express = require('express');
const router = express.Router();

// IMPORT RESTAURANT SCHEMA
const Restaurant = require('../models/restaurant');

// ROUTE FOR ALL RESTAURANTS
// .get to get all restaurants
// .post to add new restaurant
router.route('/')
  .get((req, res) => {
    Restaurant.find({}, (err, restaurants) => {
      res.status(err ? 400 : 200 ).send(err || restaurants);
    })
  })
  .post((req, res) => {
    Restaurant.create( req.body, (err, newRestaurant) => {
      res.status(err ? 400 : 200 ).send(err || newRestaurant);
    })
  })

// ROUTE FOR SPECIFIC RESTAURANTS
// .get to get data for one restaurant
// .delete to delete a restaurant
// .put to edit a restaurant
router.route('/:id')
  .get((req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
      res.status(err ? 400 : 200 ).send(err || restaurant);
    })
  })
  .delete((req, res) => {
    Restaurant.findByIdAndRemove(req.params.id, (err) => {
      res.status(err ? 400 : 200 ).send(err || req.params.id);
    })
  })
  .put((req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, restaurantToUpdate) => {
      if (err) {
        return res.status(400).send(err);
      }
      Restaurant.find({}, (err, restaurants) => {
        res.status(err ? 400: 200).send(err || restaurants);
      });
    });
  })

module.exports = router;
