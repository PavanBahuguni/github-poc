class UserModel {
  constructor() {
    this.users = [{
      id: "1",
      name: "Pavan"
    }];
  }

  create({name}) {
    const user = {
      id: `${this.users.length + 1}`,
      name
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