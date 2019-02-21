const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { userQuery, userMutation } = require('./user');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...userQuery,
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...userMutation,
    }
  }),
});

module.exports = schema;