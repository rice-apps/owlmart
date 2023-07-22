const { AuthenticationError } = require('apollo-server');
const User = require('../../models/User');
const bcrypt = require('bcrypt');


module.exports = {

  
Mutation: {
    createUser: async (_, { netID, firstName, middleInitital, lastName, password, email, payment, college }, context) => {
        
        const newUser = new User ({
            netID, firstName, middleInitital, lastName,
             password, email, payment, college,
        });

        newUser.email = email
        //password encryption
        newUser.password = await bcrypt.hash(password,10); //saltRounds of 10
        
        //Empty NetID error
        if (netID.trim() === '') {
            throw new Error('NetID must not be empty');
          }
        // Non-valid email error
        if(!(email.LowerCase.includes('rice.edu'))) {
            throw new Error('Non-Rice email: invalid registration credentials')
        }
        
      
        
        const user = await newUser.save();
            
        return user;
    },
    deleteUser: async (_, { userId }, context) => {
      // TODO: AUTHENTICATE BEFORE DELETING DOG

      try {
        const deletedUser = await User.findOneAndDelete({ _id: userId });
        if (deletedUser) return 'User deleted Sucessfully';
        else throw new Error('User does not exist');
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};


