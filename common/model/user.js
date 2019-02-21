class UserModel {
  constructor() {
    this.users = [{
      id: 1,
      name: "Pavan",
      cityId: 1
    }];
  }

  create({name, cityId}) {
    const user = {
      id: this.users.length + 1,
      name,
      cityId
    };
    this.users.push(user);
    return user;
  }

  find(id) {
    return this.users.find(user => user.id === id);
  }

  findAll() {
    return this.users;
  }
}

module.exports = new UserModel();