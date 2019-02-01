const { userService } = require('../../../common/service');

class UserResolver {
  getUsers() {
    const data = userService.getUsers();
    return data;
  }
}

module.exports = new UserResolver();