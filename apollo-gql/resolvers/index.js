const { Query: userQuery, Mutation: userMutation, ...userTypeResolver } = require('./user.resolver');

const Query = {
  ...userQuery
};

const Mutation = {
  ...userMutation,
}

const typeResolvers = {
  ...userTypeResolver
}

module.exports = {
  Query,
  Mutation,
  ...typeResolvers
};