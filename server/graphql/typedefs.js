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
  }
  type User {
    id: ID!
    netID: String!
    first_name: String!
    middle_initial: String!
    last_name: String!
    password: String!
    email: String!
    payment: String!
    college: String!
  }
  type Mutation {
    CreateUser(netID: String!, first_name: String!, middle_initial: String!, last_name: String!, password: String!, email: String!, payment: String!, college: String!): User!
  }
`;
