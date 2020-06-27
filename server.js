const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs.js')
const resolvers = require('./resolvers.js')


const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb://localhost:27017/macro_app', { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('Connected to mongo in foods db...') });


    app.listen(4000, () => {
        console.log('Express server listening on port 4000...');
    })

}

startServer();

// npm i express nodemon mongoose
// http://localhost:4000/foods --> All Food Data
// http://localhost:4000/grapql --> All Food Data




// GRAVEYARD //
// const expressGraphQL = require('express-graphql');
// const schema = require('./schema.js')
// app.use('/graphql', expressGraphQL({
//     schema:schema,
//     graphiql:true
// }))

// MONGO //
// app.use(express.json())
// const foodController = require('./Controllers/foods.js');
// app.use('/foods', foodController);