const express = require('express');
const taskRoute = require('./tasks');
const router = express.Router();

router.use('./tasks', taskRoute);

module.exports = router;
