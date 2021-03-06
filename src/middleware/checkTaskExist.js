const {getTaskById} = require('../models/task');

module.exports = function parseId(req, res, next) {
    const {id} = req.params;
    const task = getTaskById(id);
    if(!task) {
        return res.status(404);
    }
    next();
}