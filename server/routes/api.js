const express = require('express');
const router = express.Router();

router.use('/players', require('./players'));
router.use('/restaurants', require('./restaurants'));

module.exports = router;
