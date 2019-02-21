const { userService } = require('../../common/service');

module.exports = {
  Query: {
    getUsers: () => {
      return userService.getUsers();
    },
    getUser: (root, args) => {
      console.log(root, args);
      return userService.getUser(args);
    },
  },
  Mutation: {
    createUser: (root, args) => {
      return userService.createUser(args);
    }
  }
};