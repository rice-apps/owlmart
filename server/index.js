const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typedefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('../config');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

const PORT = 3000;

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected!');
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server Running at ${res.url}`);
  });
