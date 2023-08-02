const dogsResolvers = require('./dogs');
const listingResolvers = require('./listing');
const userResolvers = require('./user');
;

module.exports = {
  Query: {
    ...dogsResolvers.Query,
    ...listingResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...dogsResolvers.Mutation,
    ...listingResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};
