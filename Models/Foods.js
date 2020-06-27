const mongoose = require('mongoose');

// const Food = mongoose.model('Food', 
// { 
//     name: String,
//     protein: Number,
//     carbs: Number,
//     fats: Number,
//     category: String
// });


// module.exports = Food;


const foodSchema = new mongoose.Schema({
    name: String,
    protein: String,
    carbs: String,
    fats: String,
    totalCals: String,
    category: String
})

const Foods = mongoose.model('Food', foodSchema);

module.exports = Foods;