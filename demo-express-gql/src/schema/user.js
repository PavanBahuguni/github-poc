const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql');
const { userService } = require('../../../common/service');

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  }
})

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
      id: { type: GraphQLID }
    },
    resolve: (ctx, args) => {
      return userService.getUser(args);
    }
  }
};

const mutationType = {
  createUser: {
    type: userType,
    args: {
      name: { type: GraphQLString }
    },
    resolve: (ctx, args) => {
      return userService.createUser(args);
    },
  }
}

module.exports = {
  userQuery: queryType,
  userMutation: mutationType,
};