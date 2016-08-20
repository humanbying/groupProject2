const express = require('express');
const router = express.Router();

const Restaurant = require('../models/restaurant');


router.route('/')
  .get((req, res) => {
    Restaurant((err, data) => {
      if (err) res.send(err).status(400);
      res.send(data).status(200);
    })
  })

module.exports = router;
