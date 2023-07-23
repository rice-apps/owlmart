const { gql } = require('apollo-server');

module.exports = gql`
  type Dog {
    id: ID!
    name: String!
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
  }
  type Mutation {
    createDog(name: String!): Dog!
    deleteDog(dogId: ID!): String!
    createUser(netID: String!, firstName: String!, middleInitial: String, lastName: String!, password: String!, email: String!, payment: String!, college: String!): User!
    deleteUser(userId: ID!): String!
  }

`;
