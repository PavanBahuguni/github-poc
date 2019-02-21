class CityModel {
  constructor() {
    this.cities = [{
      id: 1,
      name: "Bangalore",
      country: "India",
      population: 10000,
    },
    {
      id: 2,
      name: "San Jose",
      country: "USA",
      population: 20000,
    },
    {
      id: 3,
      name: "Pune",
      country: "India",
      population: 30000,
    },
    {
      id: 4,
      name: "New York",
      country: "India",
      population: 40000,
    }];
  }

  find(id) {
    return this.cities.find(city => city.id === id);
  }
}

module.exports = new CityModel();