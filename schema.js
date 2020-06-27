const axios = require('axios')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
} = require('graphql');
const { default: Axios } = require('axios');

const FoodType = new GraphQLObjectType({
    name:'Food',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        protein: { type: GraphQLInt },
        carbs: { type: GraphQLInt },
        fats: { type: GraphQLInt },
        totalCalories: { type: GraphQLInt },
        category: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        food: {
            type: FoodType,
            args: {
                id: { type: GraphQLString },
                name: { type: GraphQLString },
                protein: { type: GraphQLInt },
                carbs: { type: GraphQLInt },
                fats: { type: GraphQLInt },
                totalCalories: { type: GraphQLInt },
                category: { type: GraphQLString },
            },
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/graphql/' + args.id).then(res =>res.data)
            }
        },
        foods: {
            type: new GraphQLList(FoodType),
            resolve(parentValue, args) {
                return axios.get('http://localhost:3000/graphql').then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
})