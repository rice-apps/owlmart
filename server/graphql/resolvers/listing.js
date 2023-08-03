const { AuthenticationError } = require('apollo-server');

const Listing = require('../../models/Listing');

module.exports = {
  Query: {
    async getListings() {
      try {
        const listings = await Listing.find().sort({ createdAt: -1 });

        return listings;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getListing(_, { listingId }, context) {
      try {
        console.log(listingId);
        const listing = await Listing.findById(listingId);
        console.log("Searching for listing...");
        if (listing) {
          return listing;
        } else {
          throw new Error('Listing not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createListing: async (_, { title, description, price, active, pictures, pickup, category }, context) => {
      
        // Check for empty strings
      if (title.trim() === '') {
        throw new Error('Title must not b empty');
      }
      if (description.trim() === '') {
        throw new Error('Description must not be empty');
      }
      if (price.trim() === '') {
        throw new Error('Price must not be empty');
      }
      // Check if price is a valid price
      if (!isValid_Currency(price)) {
        throw new Error("Price is not in a valid format, don't forget the $!");
      }

      const newListing = new Listing({ title, description, price, active, pictures, pickup, category, });

      const listing = await newListing.save();

      return listing;
    },
  },
};

// Checks if str is in a valid US currency format
function isValid_Currency(str) {
    // regex to check valid US currency
    let regex = new RegExp(/^\$(\d{1, 3}(\, \d{3})*|(\d+))(\.\d{2})?$/);

    // returns true if the str matched the ReGex
    if (regex.test(str) == true) {
        return true;
    }
    else {
        return false;
    }
}
