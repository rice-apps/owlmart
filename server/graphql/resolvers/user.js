const { AuthenticationError } = require('apollo-server');
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const { MONGODB } = require('../../../config');
var MongoClient = require("mongodb").MongoClient;
var url = MONGODB

module.exports = {

Mutation: {
    CreateUser: async (_, { netID }, context) => {
        
        const newUser = new User ({
            netID, first_name, middle_initital, last_name,
             password, email, payment, college,
        });

        newUser.email = email
        //password encryption
        newUser.password = bcrypt.hash(password,10); //saltRounds of 10
        
        //Empty NetID error
        if (netID?.trim() === '') {
            throw new Error('NetID must not be empty');
          }
        // Non-valid email error
        if(!(email.LowerCase.includes('rice.edu'))) {
            throw new Error('Non-Rice email: invalid registration credentials')
        }
        //Email already in database error (pending)

        const user = await newUser.save();
        return user;
    }
  }
}
