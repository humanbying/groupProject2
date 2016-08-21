const express = require('express');
const router = express.Router();

const Player = require('../models/player');

router.route('/')
  .get((req, res) => {
    Player.find({}, (err, players) => {
      res.status(err ? 400 : 200 ).send(err || players);
    })
  })
  .post((req, res) => {
    Player.create( req.body, (err, newPlayer) => {
      res.status(err ? 400 : 200 ).send(err || newPlayer);
    })
  })

router.route('/:id')
  .get((req, res) => {
    Player.findById(req.params.id, (err, player) => {
      res.status(err ? 400 : 200 ).send(err || player);
    })
  })
  .delete((req, res) => {
    Player.findByIdAndRemove(req.params.id, (err) => {
      res.status(err ? 400 : 200 ).send(err || req.params.id);
    })
  })
  .put((req, res) => {
    Player.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, playerToUpdate) => {
      if (err) {
        return res.status(400).send(err);
      }

      Player.find({}, (err, players) => {
        res.status(err ? 400: 200).send(err || players);
      });
    });
  })

module.exports = router;
