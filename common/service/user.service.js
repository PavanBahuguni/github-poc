const { userModel } = require('../model');

class UserService {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  createUser(user) {
    return userModel.create(user);
  }

  getUser({id}) {
    const data = userModel.find(id);
    return data;
  }

  getUsers() {
    return userModel.findAll();
  }
}

module.exports = new UserService();