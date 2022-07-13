const Task = require('../models/task');

function addTask(req, res){
    const {description} = req.body;
    if(!description) {
        return res.status(400).json({error: 'missing description'});
    }
    const task = Task.addTask({description});
    return res.status(201).json(task);
}

function getTaskById(req, res){
    const {id} = req.params;
    const task = Task.getTaskById(id);
    return res.json(task);
}

function getAllTask(req, res){
    const {description} = req.body;
    const tasks = Task.getAllTask({description});
    return res.json(tasks);
}

function updateTaskById(req, res){
    const {id} = req.params;
    const task = Task.updateTaskById(id);
    return res.json(task);
}

function deleteTaskById(req, res){
    const {id} = req.params;
    Task.deleteTaskById(id);
    return res.status(204);
}

module.exports = {
    addTask,
    getAllTask,
    getTaskById,
    updateTaskById,
    deleteTaskById 
};