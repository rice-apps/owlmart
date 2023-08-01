const { AuthenticationError } = require('apollo-server');
const Listing = require('../../models/Listing');

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

<<<<<<< HEAD
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

=======
>>>>>>> 4dc5374 (added listing mutation updates)
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
      // Check for empty strings
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
    updateListing: async (_, { listingId, title, description, price, active, pictures, pickup, category }, context) => {
      // Create an empty updates object
      let updates = {};
    
      // Only add fields to the updates object if they are not undefined (i.e., provided in the mutation arguments)
      if (title !== undefined) updates.title = title;
      if (description !== undefined) updates.description = description;
      if (price !== undefined) {
        if (!isValid_Currency(price)) {
          throw new Error("Price is not in a valid format, don't forget the $!");
        }
        updates.price = price;
      }
      if (active !== undefined) updates.active = active;
      if (pictures !== undefined) updates.pictures = pictures;
      if (pickup !== undefined) updates.pickup = pickup;
      if (category !== undefined) updates.category = category;
    
      try {
        // Use the updates object to update the MongoDB document.
        // Fields not included in the updates object will not be affected.
        const updatedListing = await Listing.findByIdAndUpdate(
          listingId,
          updates,
          { new: true }
        );
    
        if (!updatedListing) {
          throw new Error('Listing not found');
        }
    
        return updatedListing;
      } catch (err) {
        throw new Error(err);
      }
    updateListing: async (_, { listingId, title, description, price, active, pictures, pickup, category }, context) => {
      // Create an empty updates object
      let updates = {};
    
      // Only add fields to the updates object if they are not undefined (i.e., provided in the mutation arguments)
      if (title !== undefined) updates.title = title;
      if (description !== undefined) updates.description = description;
      if (price !== undefined) {
        if (!isValid_Currency(price)) {
          throw new Error("Price is not in a valid format, don't forget the $!");
        }
        updates.price = price;
      }
      if (active !== undefined) updates.active = active;
      if (pictures !== undefined) updates.pictures = pictures;
      if (pickup !== undefined) updates.pickup = pickup;
      if (category !== undefined) updates.category = category;
    
      try {
        // Use the updates object to update the MongoDB document.
        // Fields not included in the updates object will not be affected.
        const updatedListing = await Listing.findByIdAndUpdate(
          listingId,
          updates,
          { new: true }
        );
    
        if (!updatedListing) {
          throw new Error('Listing not found');
        }
    
        return updatedListing;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
}
<<<<<<< HEAD
  }

=======
}
>>>>>>> 4dc5374 (added listing mutation updates)
