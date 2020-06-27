const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())

const foodController = require('./Controllers/foods.js');
app.use('/foods', foodController);




mongoose.connect( 'mongodb://localhost:27017/macro_app', { useNewUrlParser: true, useUnifiedTopology: true },() => {console.log('Connected to mongo in foods db...')});

app.listen(3000, () => {
    console.log('Express server listening on port 3000...');
})

// npm i express nodemon mongoose
// http://localhost:3000/foods --> All Food Data