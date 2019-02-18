const userResolvers = require('./user.resolver');

const Query = {
  ...userResolvers.Query
};

const Mutation = {
  ...userResolvers.Mutation,
}
module.exports = {
  Query,
  Mutation,
};