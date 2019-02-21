const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const { userService, cityService } = require('../../common/service');
const { cityType } = require('./city');

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { 
      type: GraphQLInt,
      description: "From schema object: id of the user"
    },
    name: { 
      type: GraphQLString,
      description: "From schema object: name of the user"
    },
    city: {
      type: cityType,
      description: "From schema object: City information of the user.",
      resolve: (root, args) => {
        return cityService.getCity(root);
      }
    }
  }
});

const queryType = {
  getUsers: {
    type: new GraphQLList(userType),
    resolve: () => {
      return userService.getUsers();
    }
  },
  getUser: {
    type: userType,
    args: {
      id: { type: GraphQLInt }
    },
    resolve: (root, args) => {
      return userService.getUser(args);
    }
  },
};

const mutationType = {
  createUser: {
    type: userType,
    args: {
      name: { type: GraphQLString }
    },
    resolve: (root, args) => {
      return userService.createUser(args);
    },
  }
}

module.exports = {
  userQuery: queryType,
  userMutation: mutationType,
};