const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    protein: Number,
    carbs: Number,
    fats: Number,
    category: String
})

const Foods = mongoose.model('Food', foodSchema);

module.exports = Foods;