const { AuthenticationError } = require('apollo-server');

const {Listing, categories} = require('../../models/Listing');

module.exports = {
  Mutation: {
    createDog: async (_, { title, description, price, active, pictures, pickup, category  }, context) => {
      
        // Check for empty strings
      if (title.trim() === '') {
        throw new Error('Title must not be empty');
      }
      if (description.trim() === '') {
        throw new Error('Description must not be empty');
      }
      if (price.trim() === '') {
        throw new Error('Price must not be empty');
      }

      const newListing = new Listing({
        title, description, price, active, pictures, pickup, category
      });

      const listing = await newListing.save();

      return listing;
    },
  },
};
