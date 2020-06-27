const Food = require('./Models/Foods.js')
const resolvers = {
    Query: {
        foods: () => Food.find()
    },
    Mutation: {
        createFood: (parentValue, {name, protein, carbs, fats, totalCals, category}) => {
            const newFood = new Food({ name, protein, carbs, fats, totalCals, category });
            return newFood.save()
        }
    }
}



module.exports = resolvers;
