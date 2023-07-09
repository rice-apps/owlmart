const { AuthenticationError } = require('apollo-server');

const Dog = require('../../models/Dog');

module.exports = {
  Query: {
    async getDogs() {
      try {
        const dogs = await Dog.find().sort({ createdAt: -1 });

        return dogs;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getDog(_, { dogId }, context) {
      try {
        console.log(dogId);
        const dog = await Dog.findById(dogId);
        console.log("what's going on");
        if (dog) {
          return dog;
        } else {
          throw new Error('Dog not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createDog: async (_, { name }, context) => {
      //TODO: AUTHENTICATE BEFORE CREATING DOG

      if (name.trim() === '') {
        throw new Error('Dog Name must not be empty');
      }

      const newDog = new Dog({
        name,
      });

      const dog = await newDog.save();

      return dog;
    },
    deleteDog: async (_, { dogId }, context) => {
      // TODO: AUTHENTICATE BEFORE DELETING DOG

      try {
        const deletedDog = await Dog.findOneAndDelete({ _id: dogId });
        if (deletedDog) return 'Dog deleted Sucessfully';
        else throw new Error('Dog does not exist');
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
