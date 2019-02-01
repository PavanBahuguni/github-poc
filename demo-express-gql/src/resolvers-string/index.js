const userResolver = require('./user');
const { mergeResolvers } = require('merge-graphql-schemas');

const resolvers = [
  userResolver,
];

module.exports = mergeResolvers(resolvers);