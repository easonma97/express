const express = require('express');
const cors = require('./middleware/cors');
const routes = require('./routes');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors);

app.use(routes);

app.listen(PORT, () => {
    console.log(`server successfully run on port 3000`);
});