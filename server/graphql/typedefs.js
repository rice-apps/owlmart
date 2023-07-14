const { gql } = require('apollo-server');

module.exports = gql`
  type Dog {
    id: ID!
    name: String!
  }
  type Query {
    getDogs: [Dog]
    getDog(dogId: ID!): Dog
  }
  type Mutation {
    createDog(name: String!): Dog!
    deleteDog(dogId: ID!): String!
    createListing(title: String!, description: String!, price: String!, 
      active: Boolean!, pictures: [Image], pickup: Boolean!, category: categories) : Listing!
  }
`;
