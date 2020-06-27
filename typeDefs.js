const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        foods: [Food!]!
    }

    type Food {
        id: ID!
        name: String
        protein: String
        carbs: String
        fats: String
        totalCals: String
        category: String
    }

    type Mutation {
        createFood(name: String, protein: String carbs: String fats: String totalCals: String category: String): Food!
    }
`;

module.exports = typeDefs;