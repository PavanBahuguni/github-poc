const { userModel, cityModel } = require('../model');

class UserService {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  createUser(user) {
    const { cities } = cityModel;
    const newUser = {
      ...user,
      cityId: Math.floor(Math.random() * cities.length),
    };
    userModel.create(newUser);
    return newUser;
  }

  getUser({ id }) {
    return userModel.find(id);
  }

  getUsers() {
    return userModel.findAll();
  }
}

module.exports = new UserService();