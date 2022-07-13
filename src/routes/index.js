const express = require(express);
const taskRoute = require('./tasks');
const router = express.router();

router.use('./tasks', taskRoute);

module.exports = router;
