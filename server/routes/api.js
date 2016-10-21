const express = require('express');
const router = express.Router();

// ROUTER FILE TO BE USED FOR BACKEND ROUTES
router.use('/restaurants', require('./restaurants'));

module.exports = router;
