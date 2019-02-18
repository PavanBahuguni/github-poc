const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { userQuery, userMutation } = require('./user');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...userQuery,
    }
  }),
  mutations: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...userQuery,
    }
  })
});

module.exports = schema;