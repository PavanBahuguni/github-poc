const { cityService } = require('../../common/service');

module.exports = {
  User: {
    city: (root, args) => {
      return cityService.getCity({
        id: root.cityId
      });
    }
  }
};