const { userService } = require('../../common/service');

class UserResolver {
  getUsers() {
    return userService.getUsers();
  }

  getUser(_, args) {
    return userService.getUser(args);
  }

  createUser(_, args) {
    return userService.createUser(args);
  }
}

const userResolver = new UserResolver();
module.exports = {
  Query: {
    getUsers: userResolver.getUsers,
    getUser: userResolver.getUser
  },
  Mutation: {
    createUser: userResolver.createUser,
  }
}