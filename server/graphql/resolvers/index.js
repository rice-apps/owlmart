const dogsResolvers = require('./dogs');
const listingResolvers = require('./listing');

module.exports = {
  Query: {
    ...dogsResolvers.Query,
    ...listingResolvers.Query,
  },
  Mutation: {
    ...dogsResolvers.Mutation,
    ...listingResolvers.Mutation,
  },
};
