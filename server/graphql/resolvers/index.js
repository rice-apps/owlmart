const dogsResolvers = require('./dogs');
const userResolvers = require('./user')

module.exports = {
  Query: {
    ...dogsResolvers.Query,
  },
  Mutation: {
    ...dogsResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};
