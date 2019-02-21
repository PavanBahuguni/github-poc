const { cityModel } = require('../model');

class CityService {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getCity({ id }) {
    return cityModel.find(id);
  }
}

module.exports = new CityService();