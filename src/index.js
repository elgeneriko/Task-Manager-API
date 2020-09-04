var cors = require('cors');
const express = require('express');
require('./db/mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT;

const Task = require('./models/task');
const User = require('./models/user');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

app.use(cors());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
});







