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
  type User {
    id: ID!
    netID: String!
    firstName: String!
    middleInitial: String
    lastName: String!
    password: String!
    email: String!
    payment: String!
    college: String!
  }
  type Query {
    getDogs: [Dog]
    getDog(dogId: ID!): Dog
    getListings: [Listing]
    getListing(listingId: ID!): Listing
    getUsers: [User]
    getUser(userId: ID!): User
  }
  type Mutation {
    createDog(name: String!): Dog!
    deleteDog(dogId: ID!): String!
    createListing(title: String!, description: String!, price: String!, active: Boolean!, pictures: [ID], pickup: Boolean!, category: String): Listing!
    updateListing(listingId: ID!, title: String, description: String, price: String, active: Boolean, pictures: [ID], pickup: Boolean, category: String): Listing!
    createUser(netID: String!, firstName: String!, middleInitial: String, lastName: String!, password: String!, email: String!, payment: String!, college: String!): User!
    deleteUser(userId: ID!): String!
  }
`;
