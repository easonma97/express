const express = require('express');

const app = express();
app.use(express.json());
app.use(cors);
const data = [];
let id = 0;

app.post('/tasks', (req, res) => {
    const {description} = req.body;

    if(!description) {
        return res.status(400).json({error: 'missing description'});
    }

    const task = {
        id: ++id,
        description: description,
        done: false
    };
    data.push(task);
    return res.status(201).json(task);
});
app.put('/tasks/:id', (req, res) => {
    const {id} = req.params;
    const { description, done } = req.body; 
    const searchObject = data.find((ob) => ob.id === Number(id));
    if(searchObject){
        if(done !== undefined){
            searchObject.done = !!done;
        }
        if(description){
            searchObject.description = '' + description;
        }
        return res.status(201).json(
            searchObject
        );
    }else{
        return res.status(404).send('Task not found');
    }
});
app.get('/tasks', (req, res) => {
    const {description} = req.query;
    if (description) {
        const filteredTasks = data.filter((i) => i.description.includes(description));
        return res.json(filteredTasks);
    }
    res.status(200).send(data);
});
app.get('/tasks/:id', (req, res) => {
    const {id} = req.params;
    const searchObject = data.find((ob) => ob.id === Number(id));
    if(searchObject){
        return res.status(200).send(searchObject);
    }else{
        return res.status(404).send('Task not found');
    }
});
app.delete('/tasks/:id', (req, res) => {
    const {id} = req.params;
    const taskIndex = data.findIndex((ob) => ob.id === Number(id));
    if(taskIndex === -1){
        return res.status(404).send('Task not found');     
    }
    data.splice(taskIndex, 1);
    return res.status(204).json({message: 'task successfully deleted'});
});
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(3000, () => {
    console.log("server successfully run on port 3000")
});

function cors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
}