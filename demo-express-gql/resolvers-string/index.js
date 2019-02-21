const userResolver = require('./user');
const cityResolver = require('./city');

const { mergeResolvers } = require('merge-graphql-schemas');

const resolvers = [
  userResolver,
  cityResolver,
];

data = mergeResolvers(resolvers);
module.exports = data;