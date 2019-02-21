const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const { cityService } = require('../../common/service');

const cityType = new GraphQLObjectType({
  name: 'City',
  fields: {
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    },
    population: {
      type: GraphQLInt
    }
  }
});

module.exports = {
  cityType
}