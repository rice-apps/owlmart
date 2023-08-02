const { gql } = require('apollo-server');

module.exports = gql`
  type Dog {
    id: ID!
    name: String!
  }
  type Listing {
    id: ID!
    title: String!
    description: String!
    price: String!
    active: Boolean!
    pictures: [ID]
    pickup: Boolean!
    category: String
  }
  type Query {
    getDogs: [Dog]
    getDog(dogId: ID!): Dog
    getListings: [Listing]
    getListing(listingId: ID!): Listing
  }
  type Mutation {
    createDog(name: String!): Dog!
    deleteDog(dogId: ID!): String!
    createListing(title: String!, description: String!, price: String!, active: Boolean!, pictures: [ID], pickup: Boolean!, category: String): Listing!
  }
`;
