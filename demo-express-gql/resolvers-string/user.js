const { userService } = require('../../common/service');

class UserResolver {
  getUsers() {
    return userService.getUsers();
  }

  getUser(args) {
    return userService.getUser(args);
  }

  createUser(args) {
    return userService.createUser(args);
  }
}

module.exports = new UserResolver();